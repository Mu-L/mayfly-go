<template>
    <el-tag v-bind="$attrs" :type="type" :color="color" effect="plain">{{ enumLabel }}</el-tag>
</template>

<script lang="ts" setup>
import { toRefs, watch, reactive, onMounted } from 'vue';
import EnumValue from '@/common/Enum';

const props = defineProps({
    enums: {
        type: Object, // 需要为EnumValue类型
        required: true,
    },
    value: {
        type: Object,
        required: true,
    },
});

const state = reactive({
    type: 'primary',
    color: '',
    enumLabel: '',
});

const { type, color, enumLabel } = toRefs(state);

// 监听该值是否改变，改变则需要将其枚举值与标签进行调整
watch(
    () => props.value,
    (newValue: any) => {
        convert(newValue);
    }
);

onMounted(() => {
    convert(props.value);
});

const convert = (value: any) => {
    const enumValue = EnumValue.getEnumByValue(Object.values(props.enums as any) as any, value) as any;
    if (!enumValue) {
        state.enumLabel = '-';
        state.type = 'danger';
        state.color = '';
        return;
    }

    state.enumLabel = enumValue?.label || '';
    if (enumValue.tag) {
        state.color = enumValue.tag.color;
        state.type = enumValue.tag.type;
    }
};
</script>
<style scoped lang="scss"></style>
