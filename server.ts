import express from 'express';
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.json());
export class Course{
    constructor(
        public id:number,
        public courseName:string,
        public images:string, 
        public task:number,
        public person:number
    ){}
}
export class Tongbu{
    constructor(
        public id:number,
        public courseName:string,
        public images:string, 
        public jieshao:string,
        public task:number,
        public person:number
    ){}
}
const courses = [
    new Course(1,'2018级信息素养实践',
    "http://usercontent.edu2act.cn/media/team/18-09-06/UTjLGPA9oHaKeHMLi9Ko4c.jpg?imageView2/1/w/230/h/130",
    10,90),
    new Course(2,'混合应用',
    "http://usercontent.edu2act.cn/media/team/18-09-18/VE66xjRaii5X8Y9qFZQLZC.jpg?imageView2/1/w/230/h/130",
    
    23,100),
    new Course(3,'测试',
    "http://usercontent.edu2act.cn/media/team/18-09-11/AbbCZfnQVQHxyU2GBbQ5SB.jpg?imageView2/1/w/230/h/130",
    15,97),
    new Course(4,'计算机导论',
    "http://usercontent.edu2act.cn/media/team/18-09-06/HUcdGNR48SfNpHPRjGQqXb.jpg?imageView2/1/w/230/h/130",
    30,99),
    new Course(5,'2017级Web开发（二）',
    "http://usercontent.edu2act.cn/media/team/18-09-11/Ypf253J7ydMQ2CckxWf6zJ.jpg?imageView2/1/w/230/h/130",
    30,99),
    new Course(6,'2016级HTML5与CSS3前端开发',
    "http://usercontent.edu2act.cn/media/team/18-09-11/B32yP44hiothFxyegigXe7.jpg?imageView2/1/w/230/h/130",
    30,99),
    new Course(7,'2017级数据结构',
    "http://usercontent.edu2act.cn/media/team/18-09-06/bE6jL98kCfWg3Hij6gyokN.jpg?imageView2/1/w/230/h/130",
    120,94),
    new Course(8,'2017级coding暑期训练营',
    "http://usercontent.edu2act.cn/media/team/18-07-09/J3LxZ5cMMP9JFjGuDbSsh8.png?imageView2/1/w/230/h/130",
    300,29),
]
const tongbus = [
    new Tongbu(1,'Github 开源之旅视频课程第一季：启程',
    "http://usercontent.edu2act.cn/media/cs/17-02-20/BRmabjXmc6M87Hx678jgkk.png?imageView2/1/w/320/h/190",
    '      完成本课程之后，能够达到以下目标：- 实名注册 Github 账户- 能够在 Github 上搜索资料- 能够评估人和项目的活跃度- 掌握 Github 社交化- 能够创建 Github 远程仓库- 能够删除 Github 远程仓库- 能够建立本地仓库- 能够把本地仓库和远程仓库建立关联- 能够在本地仓库和远成仓库之间 push 和 pull ',
    10,90),
    new Tongbu(2,'CSS3基础',
    "http://usercontent.edu2act.cn/media/cs/16-11-14/XgKaLUTcWTUsPaqF2hXSHK.png?imageView2/1/w/320/h/190",
    '      CSS3在以前的基础上添加了诸多新的选择器以及新的样式。本课程将讲解CSS3新样式以及新特性。',
    10,90),
    new Tongbu(3,'HTML5基础',
    "http://usercontent.edu2act.cn/media/cs/16-11-11/JjHN2Za86UhpyK8u6MEtsC.png?imageView2/1/w/320/h/190",
    '    HTML5是最新的一项Web标准，在原有HTML4的基础上定义了一些新的标签和新的JavaScript API。是原有HTML4标准的一个超集。本课程主要介绍HTML5的新特性以及相应API。',
    10,90),
    new Tongbu(4,'Github 开源之旅视频课程第一季：启程',
              "http://usercontent.edu2act.cn/media/cs/16-11-14/XgKaLUTcWTUsPaqF2hXSHK.png?imageView2/1/w/320/h/190",
              "",10,90),
    new Tongbu(5,'Github 开源之旅视频课程第一季：启程',
    "http://usercontent.edu2act.cn/media/cs/17-02-20/BRmabjXmc6M87Hx678jgkk.png?imageView2/1/w/320/h/190",
    '      完成本课程之后，能够达到以下目标：- 实名注册 Github 账户- 能够在 Github 上搜索资料- 能够评估人和项目的活跃度- 掌握 Github 社交化- 能够创建 Github 远程仓库- 能够删除 Github 远程仓库- 能够建立本地仓库- 能够把本地仓库和远程仓库建立关联- 能够在本地仓库和远成仓库之间 push 和 pull ',
    10,90),
    
]

app.get('/api/courses',(req,res)=>{
    res.json(courses);
});
app.get('/api/tongbus',(req,res)=>{
    res.json(tongbus);
});
app.get('/api/courses/:id',(req,res)=>{
    res.json(courses.find((ele)=>ele.id == req.params.id));
});
app.post('/api',(req,res)=>{
    console.log(req.body);
    res.json(courses);
})
app.listen(8000);