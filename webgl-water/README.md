基于webgl实现的水面渲染

从html移植到小游戏过来，效果可以说非常好看了。

水面顶点运动有波动叠加，反弹，衰减（无Gerstner波），水面渲染则是折射反射菲涅尔，焦散软阴影都有。

比较大程度地利用了可编程管线和可编程着色器。计算量大，纹理多，显存占用也不低。

需要使用half_float和float_texture的webgl扩展，电脑一般都支持，手机不一定。

代码源地址：
https://github.com/evanw/webgl-water

html效果展示：
http://madebyevan.com/webgl-water