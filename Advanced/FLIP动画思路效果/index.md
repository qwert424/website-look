FLIP 动画思路

F：first 起始
L：last 结束
I：invert 反转
P：play 播放

这个动画思路运用于dom结构改变时候的动画效果 
因为dom结构改变时当主线程仍在进行 则绘制还没进行 通过invert（transform）回到原始位置 在进行play 实现动画效果
