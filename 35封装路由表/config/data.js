const travelList = [
  {
    id: 0,
    type: 'domestic',
    title: '周末2日游︱特价498元 越野穿越草原无人区·浑善达克沙漠多伦湖·草原漂流',
    image: 'http://res.lvye.com/upload/1392184093.jpg?imageView2/3/w/240/h/240/q/45|imageslim',
    price: 498,
  }, {
    id: 1,
    type: 'domestic',
    title: '【十一国庆最美秋景】【呼伦贝尔 阿尔山】【莫尔道嘎 满洲里】【额尔古纳】休闲游',
    image: 'http://res.lvye.com/upload/1138512479.jpg?imageView2/3/w/240/h/240/q/45|imageslim',
    price: 2580
  }, {
    id: 2,
    type: 'domestic',
    title: '【国庆重走丝绸之路-西北全景】大美青海湖-茶卡盐湖-敦煌莫高窟 额济纳胡杨林 ',
    image: 'http://res.lvye.com/upload/1671688227.png?imageView2/3/w/240/h/240/q/45|imageslim',
    price: 2580
  }, {
    id: 3,
    type: 'abroad',
    title: '柬埔寨5日跟团游 北京直飞',
    image: 'http://res.lvye.com/upload/6451838.jpg?imageView2/3/w/240/h/240/q/45|imageslim',
    price: 1680
  }, {
    id: 4,
    type: 'abroad',
    title: '欧洲旅游 德国一地深度14日游',
    image: 'http://res.lvye.com/upload/1868890704.png?imageView2/3/w/240/h/240/q/45|imageslim',
    price: 15999
  }, {
    id: 5,
    type: 'abroad',
    title: '欧洲<意大利深度游>意大利一地10天 ',
    image: 'http://res.lvye.com/upload/1993116420.jpg?imageView2/3/w/240/h/240/q/45|imageslim',
    price: 13800
  },
]

const travelDetail = [
  {
    id: 0,
    type: 'domestic',
    title: '周末2日游︱特价498元 越野穿越草原无人区·浑善达克沙漠多伦湖·草原漂流',
    image: 'http://res.lvye.com/upload/1392184093.jpg?imageView2/3/w/240/h/240/q/45|imageslim',
    price: 498,
    introduce: `多伦湖景区位于内蒙古自治区锡林郭勒盟境内，在多伦县城东南，紧依国道G510，主入口距多伦县城16公里。是滦河干流的上游。水域面积2万亩，处于高山、沙地、草原之中，东西两岸各17公里长。沿库区两岸及库区内湖心岛、半岛、沙半岛和山、水、沙、草、林浑然一体，构成一幅既壮观又秀美的立体画卷。2011年多伦湖被旅游休闲杂志评为中国最美的两个秋景之一。`
  }, {
    id: 1,
    type: 'domestic',
    title: '【十一国庆最美秋景】【呼伦贝尔 阿尔山】【莫尔道嘎 满洲里】【额尔古纳】休闲游',
    image: 'http://res.lvye.com/upload/1138512479.jpg?imageView2/3/w/240/h/240/q/45|imageslim',
    price: 2580,
    introduce: `【阿尔山】的秋天，是一幅缤纷绚烂、浓墨重彩的油画，满眼都是燃烧的火红，耀眼的金黄，通透的碧蓝，那种美让人震撼。阿尔山景区面积10万多公顷，短短的十一假期走遍是不可能的，我们为大家精选了几处最美丽、最有特色的景点。`
  }, {
    id: 2,
    type: 'domestic',
    title: '【国庆重走丝绸之路-西北全景】大美青海湖-茶卡盐湖-敦煌莫高窟 额济纳胡杨林 ',
    image: 'http://res.lvye.com/upload/1671688227.png?imageView2/3/w/240/h/240/q/45|imageslim',
    price: 2580,
    introduce: `推荐去参观下兰州的甘肃省博物馆，由于甘肃地处丝绸之路，同时又是汉藏地域的交界地，所以能反映西域、中原、藏区文化的文物都有大量的出土展示，使博物馆中的文物丰富多彩又别具风格，非常值得参观。另外还可逛下黄河铁桥，铁桥长两百多米，修建于清朝末年，走上铁桥，下面便是安静流淌的黄河，而两岸的风景也很不错。`
  }, {
    id: 3,
    type: 'abroad',
    title: '柬埔寨5日跟团游 北京直飞',
    image: 'http://res.lvye.com/upload/6451838.jpg?imageView2/3/w/240/h/240/q/45|imageslim',
    price: 1680,
    introduce: `看看暹粒
    只有约8000人口的小城暹粒与喧嚣的金边相比，显得安静而毫不起眼。令世界各地的旅行者趋之若骛的是小城北部被列为世界文化遗产、世界七大奇迹之一的吴哥窟。吴哥窟是对吴哥古迹群的统称。这是古高棉王国的首都，一座曾经是全世界最大的城市。从公元802年开始，长达数百年的大兴土木，城市中耸立起宫殿与寺庙，吴哥逐渐成为整个高棉王国的社会与精神中心。
    公元1431年，暹罗王朝（即如今的泰国）入侵高棉，高棉人被迫离开吴哥，在金边建立了新的首都，从此吴哥湮没在丛林之中，被世人遗忘。直到1860年，法国植物学家亨利·莫哈特为了收集植物标本来到暹粒，吴哥城才得以重见天日。当第一眼看到崩密列——这座未被完全发掘和整修的寺庙时，你一定完全能体会当年法国人发现吴哥窟时的惊讶和震撼。`
  }, {
    id: 4,
    type: 'abroad',
    title: '欧洲旅游 德国一地深度14日游',
    image: 'http://res.lvye.com/upload/1868890704.png?imageView2/3/w/240/h/240/q/45|imageslim',
    price: 15999,
    introduce: `浪漫之路：此行将带您沿欧洲久负盛名的“浪漫之路”开启您的浪漫旅程。漫步在汇聚了建筑艺术瑰宝和浪漫的维尔茨堡老城，徜徉在中古世纪古城风貌保存最完整城市罗滕堡`
  }, {
    id: 5,
    type: 'abroad',
    title: '欧洲<意大利深度游>意大利一地10天 ',
    image: 'http://res.lvye.com/upload/1993116420.jpg?imageView2/3/w/240/h/240/q/45|imageslim',
    price: 13800,
    introduce: `走进意大利
    意大利位于欧洲南部，主要由靴子型的亚平宁半岛和两个位于地中海中的大岛西西里岛和萨丁岛组成。其领土包围着两个袖珍国——圣马力诺和梵蒂冈。 意大利因其拥有美丽的自然风光和为数众多的人类文化遗产而被称为美丽的国度。意大利是世界上高度发达国家之一，是北大西洋公约和欧盟的创始会员国之一。 作为地中海沿岸的一个半岛国家，意大利的国土有大陆、半岛以及零散岛屿三种组成。意大利南北风光绝然不同，北部的阿尔卑斯山区终年积雪、风姿绰约，南部的西西里岛阳光充足而又清爽宜人。一年四季，意大利的任何角落，都不会令人失望。最佳季节：5月-10月最佳，意大利一年四季都适合旅游，旺季集中在每年5月至10月，4-6月是天气最好的季节。`
  },
]


module.exports = {
  travelList,
  travelDetail,
}