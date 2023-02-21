<script lang="ts">
import { ref } from 'vue'
export default {
    setup() {


        const dialogVisible = ref(false)
        return { dialogVisible }
    },
    data() {
        return {
            item: 0,
        }
    },


}

</script>
<template>
    <el-card class="box-card" shadow="hover" :body-style="{ fontStyle: 'italic' }">
        <el-dialog v-model="dialogVisible" title="引用格式" width="50%" draggable>
            <span v-if="(item == 1)">
                <pre style="word-wrap: break-word; white-space: pre-wrap;">
[1]许灿辉,史操,孙春奇,陶冶,刘国柱,程远志. 一种利用先验知识构建文档图像数据集的方法[P]. 山东省：CN111783416A,2020-10-16.
        </pre>
            </span>
            <span v-else-if="(item == 2)">
                <pre style="word-wrap: break-word; white-space: pre-wrap;">
[1]史操,许灿辉,刘传琦,程远志,陶冶,马兴录,刘国柱. 基于深度学习生成文档图像集的方法[P]. 山东省：CN112347742B,2022-05-31.
        </pre>
            </span>
            <span v-else-if="(item == 3)">
                <pre style="word-wrap: break-word; white-space: pre-wrap;">
@misc{许灿辉2014版式文档中复合图的逻辑处理装置和逻辑处理方法,
title={版式文档中复合图的逻辑处理装置和逻辑处理方法},
author={许灿辉 and 汤帜 and 陶欣 and 史操},
year={2014},
}
        </pre>
            </span>
            <span v-else-if="(item == 4)">
                <pre style="word-wrap: break-word; white-space: pre-wrap;">
@misc{许灿辉2014版式文档中复合图的提取装置和提取方法,
title={版式文档中复合图的提取装置和提取方法},
author={许灿辉 and 汤帜 and 陶欣 and 史操},
year={2014},
}
        </pre>
            </span>
            <span v-else-if="(item == 5)">
                <pre style="word-wrap: break-word; white-space: pre-wrap;">
@misc{许灿辉2015一种列表识别方法与系统,
title={一种列表识别方法与系统},
author={许灿辉 and 汤帜 and 徐剑波 and 陶欣},
year={2015},
}
        </pre>
            </span>
            <span v-else-if="(item == 6)">
                <pre style="word-wrap: break-word; white-space: pre-wrap;">
@misc{许灿辉2015一种表格识别方法与系统,
title={一种表格识别方法与系统},
author={许灿辉 and 汤帜 and 徐剑波 and 陶欣},
year={2015},
}

        </pre>
            </span>
            <span v-else-if="(item == 7)">
                <pre style="word-wrap: break-word; white-space: pre-wrap;">
@misc{桂卫华0一种浮选泡沫图像视觉监控装置,
title={一种浮选泡沫图像视觉监控装置},
author={桂卫华 and 阳春华 and 周开军 and 许灿辉 and 唐朝晖 and 程翠兰 and 刘金平 and 申晓军 and 欧文军 and 杜建江},
}
        </pre>
            </span>
            <span v-else-if="(item == 8)">
                <pre style="word-wrap: break-word; white-space: pre-wrap;">
@misc{阳春华0用于浮选泡沫图像分析的关键特征提取方法,
title={用于浮选泡沫图像分析的关键特征提取方法},
author={阳春华 and 桂卫华 and 周开军 and 许灿辉 and 唐朝晖 and 刘金平 and 程翠兰},
}
        </pre>
            </span>
            <span v-else-if="(item == 9)">
                <pre style="word-wrap: break-word; white-space: pre-wrap;">
@misc{2015TABLE,
title={TABLE RECOGNIZING METHOD AND TABLE RECOGNIZING SYSTEM},
author={ Xu, Canhui  and  Tang, Zhi  and  Xu, Jianbo  and  Tao, Xin },
year={2015},
}
        </pre>
            </span>
            <span v-else-if="(item == 10)">
                <pre style="word-wrap: break-word; white-space: pre-wrap;">
@misc{2015LIST,
title={LIST RECOGNIZING METHOD AND LIST RECOGNIZING SYSTEM},
author={ Canhui, X. U.  and  Tang, Zhi  and  Jianbo, X. U.  and  Tao, Xin },
year={2015},
}
        </pre>
            </span>
        </el-dialog>
        
        <el-card shadow="hover">
            <p>1.许灿辉，史操，孙春奇，陶冶，刘国柱，程远志.一种利用先验知识构建文档图像数据集的方法，CN111783416A</p>
            <el-button class="button"><el-link href="/papers/teachers/patents/CN111783416A一种利用先验知识构建文档图像数据集的方法.pdf"
                    target="_blank"><el-icon>
                        <Link />
                    </el-icon>PDF</el-link></el-button>
            <el-button class="button" @click="dialogVisible = true, item = 1">
                <font color='LightSkyBlue'><el-icon>
                        <DocumentCopy />
                    </el-icon>引用</font>
            </el-button>
        </el-card>
        <el-card shadow="hover">
            <p>2.史操;许灿辉;刘传琦;程远志;陶冶;马兴录;刘国柱.基于深度学习生成文档图像集的方法，CN112347742A</p>
            <el-button class="button"><el-link href="/papers/teachers/patents/CN112347742A基于深度学习生成文档图像集的方法-申请公开.pdf"
                    target="_blank"><el-icon>
                        <Link />
                    </el-icon>PDF</el-link></el-button>
            <el-button class="button" @click="dialogVisible = true, item = 2">
                <font color='LightSkyBlue'><el-icon>
                        <DocumentCopy />
                    </el-icon>引用</font>
            </el-button>
        </el-card>
        
        <el-card shadow="hover">
            <p>3.许灿辉, 汤帜, 陶欣, 史操. 版式文档中复合图的逻辑处理装置和逻辑处理方法，CN104142961A</p>
            <el-button class="button"><el-link href="/papers/teachers/patents/CN104142961A版式文档中复合图的逻辑处理装置和逻辑处理方法.PDF"
                    target="_blank"><el-icon>
                        <Link />
                    </el-icon>PDF</el-link></el-button>
            <el-button class="button" @click="dialogVisible = true, item = 3">
                <font color='LightSkyBlue'><el-icon>
                        <DocumentCopy />
                    </el-icon>引用</font>
            </el-button>
        </el-card>
        <el-card shadow="hover">
            <p>4.许灿辉, 汤帜, 陶欣, 史操. 版式文档中复合图的提取装置和提取方法，CN104346615A</p>
            <el-button class="button"><el-link href="/papers/teachers/patents/CN104346615A版式文档中复合图的提取装置和提取方法.PDF"
                    target="_blank"><el-icon>
                        <Link />
                    </el-icon>PDF</el-link></el-button>
            <el-button class="button" @click="(dialogVisible = true, item = 4)">
                <font color='LightSkyBlue'><el-icon>
                        <DocumentCopy />
                    </el-icon>引用</font>
            </el-button>
        </el-card>
        <el-card shadow="hover">
            <p>5.许灿辉, 汤帜, 徐剑波, 陶欣.一种列表识别方法与系统，CN104517106A</p>
            <el-button class="button"><el-link href="/papers/teachers/patents/CN104517106A一种列表识别方法与系统.PDF"
                    target="_blank"><el-icon>
                        <Link />
                    </el-icon>PDF</el-link></el-button>
            <el-button class="button" @click="(dialogVisible = true, item = 5)">
                <font color='LightSkyBlue'><el-icon>
                        <DocumentCopy />
                    </el-icon>引用</font>
            </el-button>
        </el-card>
        <el-card shadow="hover">
            <p>6.许灿辉, 汤帜, 徐剑波, 陶欣.一种表格识别方法与系统，CN104517112A</p>
            <el-button class="button"><el-link href="/papers/teachers/patents/CN104517112A一种表格识别方法与系统.PDF"
                    target="_blank"><el-icon>
                        <Link />
                    </el-icon>PDF</el-link></el-button>
            <el-button class="button" @click="(dialogVisible = true, item = 6)">
                <font color='LightSkyBlue'><el-icon>
                        <DocumentCopy />
                    </el-icon>引用</font>
            </el-button>
        </el-card>
        <el-card shadow="hover">
            <p>7.桂卫华，阳春华，周开军，许灿辉. 一种浮选泡沫图像视觉监控装置，CN101404722A</p>
            <el-button class="button"><el-link href="/papers/teachers/patents/CN101404722A一种浮选泡沫图像视觉监控装置.PDF"
                    target="_blank"><el-icon>
                        <Link />
                    </el-icon>PDF</el-link></el-button>
            <el-button class="button" @click="(dialogVisible = true, item = 7)">
                <font color='LightSkyBlue'><el-icon>
                        <DocumentCopy />
                    </el-icon>引用</font>
            </el-button>
        </el-card>
        <el-card shadow="hover">
            <p>8.桂卫华，阳春华，周开军，许灿辉. 用于浮选泡沫图像分析的关键特征提取方法，CN101334844A</p>
            <el-button class="button"><el-link href="/papers/teachers/patents/CN101334844A用于浮选泡沫图像分析的关键特征提取方法.PDF"
                    target="_blank"><el-icon>
                        <Link />
                    </el-icon>PDF</el-link></el-button>
            <el-button class="button" @click="(dialogVisible = true, item = 8)">
                <font color='LightSkyBlue'><el-icon>
                        <DocumentCopy />
                    </el-icon>引用</font>
            </el-button>
        </el-card>
        <el-card shadow="hover">
            <p>9.Canhui Xu, Zhi Tang, Jianbo Xu, Xin Tao.TABLE RECOGNIZING METHOD AND TABLE RECOGNIZING
                SYSTEM,US20150093021A1
            </p>
            <el-button class="button"><el-link
                    href="/papers/teachers/patents/US20150093021A1-TABLE RECOGNIZING METHOD AND TABLE RECOGNIZING SYSTEM.PDF"
                    target="_blank"><el-icon>
                        <Link />
                    </el-icon>PDF</el-link></el-button>
            <el-button class="button" @click="(dialogVisible = true, item = 9)">
                <font color='LightSkyBlue'><el-icon>
                        <DocumentCopy />
                    </el-icon>引用</font>
            </el-button>
        </el-card>
        <el-card shadow="hover">
            <p>10.Canhui Xu, Zhi Tang, Jianbo Xu, Xin Tao. List recognizing method and list recognizing
                system，US20150095022A1
            </p>
            <el-button class="button"><el-link
                    href="/papers/teachers/patents/US20150095022A1-LIST RECOGNIZING METHOD AND LIST RECOGNIZING SYSTEM.PDF"
                    target="_blank"><el-icon>
                        <Link />
                    </el-icon>PDF</el-link></el-button>
            <el-button class="button" @click="(dialogVisible = true, item = 10)">
                <font color='LightSkyBlue'><el-icon>
                        <DocumentCopy />
                    </el-icon>引用</font>
            </el-button>
        </el-card>
    </el-card>


</template>
