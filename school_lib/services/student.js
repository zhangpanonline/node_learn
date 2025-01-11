const Student = require('../models/Student')
const Class = require('../models/Class')
const { Op } = require('sequelize')

exports.add = async function(obj) {
    const ins = await Student.create(obj)
    return ins.toJSON()
}

exports.delete = async function (id) {
    // // 方法一
    // // 1. 查询实例
    // const ins = await Student.findByPk(id)
    // if (ins) {
    // // 2. 删除实例
    //     return await ins.destroy()
    // } else {
    //     return '数据不存在'
    // }
    
    // 方法二
    return await Student.destroy({
        where: {
            id
        }
    })
}

exports.update = async function(id, obj = {}) {
    // // 方式1
    // const ins = await Student.findByPk(id)
    // if (ins) {
    //     for(let k in obj) {
    //         ins[k] = obj[k]
    //     }
    //     return (await ins.save()).toJSON()
    // } else {
    //     return '数据不存在'
    // }
    // 方式2
    return await Student.update(obj, {
        where: {
            id
        }
    })
}

exports.getStudents = async function(page = 1, limit = 10, sex = -1, name = '') {
    // 方式一
    //    const res = await Student.findAll({
    //         offset: (page - 1) * limit,
    //         limit
    //    })
    //    const total = await Student.count()
    //    return {
    //      data: JSON.parse(JSON.stringify(res)),
    //      total,
    //    }

    // 方式二
    const where = {}
    if (sex !== -1) {
        where.sex = Boolean(sex)
    }
    if (name) {
        // 模糊查询
        where.name = {
            [Op.like]: `%${name}%`
        }
    }
    const res = await Student.findAndCountAll({
        offset: (page - 1) * limit,
        limit,
        where,
        // 查询部分字段
        attributes: ['id', 'name', 'sex'],
        // 查询关联关系
        include: [Class]
    })
    return JSON.parse(JSON.stringify(res))
}