class Singer{
    constructor(id, name, avata, link){
        this.id = id;
        this.name = name;
        this.avata = avata;
        this.link = link;
    }
}

let domainImg = "https://photo-resize-zmp3.zadn.vn/w240h240_jpeg/avatars/";
let domain = "https://zingmp3.vn/nghe-si/";

let arrSinger = [
    new Singer(1, 'tuan hung', 'avata1', 'link1'),
    new Singer(2, 'huong tram', 'avata2.jpg', 'link2'),
    new Singer(3, 'dan truong', 'avata3.jpg', 'link3'),
    new Singer(4, 'cam ly', 'avata4.jpg', 'link4'),
];

module.exports = {Singer, arrSinger, domain, domainImg}