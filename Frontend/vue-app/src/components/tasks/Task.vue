<template>
    <li class="list-group-item py-3">
        <div class="d-flex justify-content-start align-items-center">
            <input class="form-check-input mt-0" :class="completeClass" type="checkbox" :checked="task.is_completed"
                @change="markTaskAscompleted" />
            <div class="ms-2 flex-grow-1" :class="completeClass" @dblclick="isEdit = true"
                title="Double click the text to edit or remove">
                <div class="relative" v-if="isEdit">
                    <input class="editable-task" v-model="editingTask" type="text" @keyup.esc="undo" v-focus
                        @keyup.enter="updateTask" />
                </div>
                <span v-if="!isEdit">{{ task.name }}</span>
            </div>
            <!-- <div class="task-date">24 Feb 12:00</div> -->
        </div>
        <TaskActions @edit="isEdit = true" v-show="!isEdit" @remove="removeTask" />
    </li>
</template>
<script setup>

import { computed, ref } from 'vue'
import TaskActions from './TaskActions.vue';

const props = defineProps({
    task: Object
})

const emit = defineEmits(['updated', 'completed', 'removed'])

const isEdit = ref(false)

const editingTask = ref(props.task.name)

const completeClass = computed(() => props.task.is_completed ? 'completed' : '')

const vFocus = {
    mounted: (el) => el.focus()
}

const updateTask = (event) => {
    const updatedTask = { ...props.task, name: event.target.value }
    isEdit.value = false
    emit('updated', updatedTask)
}

const markTaskAscompleted = (event) => {
    const updatedTask = { ...props.task, is_completed: !props.task.is_completed }
    emit('completed', updatedTask)
}

const removeTask = () => {
    if (confirm('Are you sure you want to delete the task?')) {
        emit('removed', props.task)
    }
}

const undo = () => {
    isEdit.value = false
    editingTask.value = props.task.name
}


</script>