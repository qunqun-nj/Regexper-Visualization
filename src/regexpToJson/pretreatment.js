
// 预处理的任务就是把不同可能的输入统一成一样的格式，
// 这样的好处是后续判断的时候可以在一个比较小的集合里面考虑

export default function (express) {
    return express.replace(/\\\\/g, '\\');
};
