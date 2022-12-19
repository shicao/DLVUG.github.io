<template>
    <el-button class="button" @click="dialogVisible = true">
        <font color='LightSkyBlue'><el-icon>
                <DocumentCopy />
            </el-icon>Bib</font>
    </el-button>


    <el-dialog v-model="dialogVisible" title="BibTex" width="30%" draggable>
        <span>It's a draggable Dialog</span>
    </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const dialogVisible = ref(false)
</script>
