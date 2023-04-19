const baseData = {
  // 卡口信息
  router: {
    communityNumber: 12,
    campusNumber: 48,
    bayonetNumber: 96,
    protectionNumber: 2346,
  },
  // 佩戴口罩监控
  mask: {
    passPeople: 56945,
    noMask: 6846,
    chart1:{
      type:["田东","鹏湾","梧桐","海涛","树叶","夫子","虔诚","岩石","朝阳","群众"], // x轴种类名称
      data: [120, 200, 150, 80,60,40,80,10,80,60] // 数据数量
    },
    chart2:{
      data: [
        { value: 1048, name: '田东' },
        { value: 735, name: '鹏湾' },
        { value: 580, name: '梧桐' },
        { value: 484, name: '海涛' },
        { value: 300, name: '树叶' },
        { value: 484, name: '夫子' },
        { value: 300, name: '虔诚' },
        { value: 484, name: '岩石' },
        { value: 300, name: '朝阳' },
        { value: 484, name: '群众' }
      ],
    }
  },
  // 疫苗接种
  vaccine: {
    finish: 49751,
    noFinish: 23120,
    chart1:{
      type:["田东","鹏湾","梧桐","海涛","树叶","夫子","虔诚","岩石","朝阳","群众"], // x轴种类名称
      data: [120, 200, 150, 80,60,40,80,10,80,60] // 数据数量
    },
    chart2:{
      data: [ // 饼状图的数据  前十
        { value: 1048, name: '田东' },
        { value: 735, name: '鹏湾' },
        { value: 580, name: '梧桐' },
        { value: 484, name: '海涛' },
        { value: 300, name: '树叶' },
        { value: 484, name: '夫子' },
        { value: 300, name: '虔诚' },
        { value: 484, name: '岩石' },
        { value: 300, name: '朝阳' },
        { value: 484, name: '群众' }
      ],
    }
  },
  // 测量体温
  temperature: {
    testNumber: 12,
    normalNumber: 48,
    chart1:{
      type:["田东","鹏湾","梧桐","海涛","树叶","夫子","虔诚","岩石","朝阳","群众"], // x轴种类名称
      data: [120, 200, 150, 80,60,40,80,10,80,60] // 数据数量
    },
    chart2:{
      data: [ // 饼状图的数据  前十
        { value: 1048, name: '田东' },
        { value: 735, name: '鹏湾' },
        { value: 580, name: '梧桐' },
        { value: 484, name: '海涛' },
        { value: 300, name: '树叶' },
        { value: 484, name: '夫子' },
        { value: 300, name: '虔诚' },
        { value: 484, name: '岩石' },
        { value: 300, name: '朝阳' },
        { value: 484, name: '群众' }
      ],
    }
  },
  // 健康码
  healthy: {
    redNumber: 0,
    yellowNumber: 16,
    blueNumber: 68484,
    chart1:{
      type:["田东","鹏湾","梧桐","海涛","树叶","夫子","虔诚","岩石","朝阳","群众"], // x轴种类名称
      data: [120, 200, 150, 80,60,40,80,10,80,60] // 数据数量
    },
    chart2:{
      data: [ // 饼状图的数据  前十
        { value: 1048, name: '田东' },
        { value: 735, name: '鹏湾' },
        { value: 580, name: '梧桐' },
        { value: 484, name: '海涛' },
        { value: 300, name: '树叶' },
        { value: 484, name: '夫子' },
        { value: 300, name: '虔诚' },
        { value: 484, name: '岩石' },
        { value: 300, name: '朝阳' },
        { value: 484, name: '群众' }
      ],
    }
  },
  // 高风险
  risk: {
    riskNumber: 0,
    chart1:{
      type:["田东","鹏湾","梧桐","海涛","树叶","夫子","虔诚","岩石","朝阳","群众"], // x轴种类名称
      data: [120, 200, 150, 80,60,40,80,10,80,60] // 数据数量
    },
    chart2:{
      data: [ // 饼状图的数据  前十
        { value: 1048, name: '田东' },
        { value: 735, name: '鹏湾' },
        { value: 580, name: '梧桐' },
        { value: 484, name: '海涛' },
        { value: 300, name: '树叶' },
        { value: 484, name: '夫子' },
        { value: 300, name: '虔诚' },
        { value: 484, name: '岩石' },
        { value: 300, name: '朝阳' },
        { value: 484, name: '群众' }
      ],
    }
  },
};
