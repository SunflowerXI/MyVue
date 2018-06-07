<template>
</template>  

<script>
export default {
    name:"timer",
    props:{
        initialName:{
            type: String,
            default: 'default',
            required: false 
        },
        initialCounter:{
            type: Number,
            default: 0,
            required: false
        },
        initialUnit:{
            type: Number,
            default: 1000,
            required: false
        },
        initialTask: {
            type: Function,
            default: null,
            required: false
        }
    },
    data(){
        return{
            name:this.initialName,
            counter:this.initialCounter,
            unit:this.initialUnit,
            task:this.initialTask
        }
    },
    methods:{
        getUnit(){
			return this.unit;
		},
        setUnit(e){
			if(typeof e !== 'number'){
				console.error("仅支持Number 类型的参数！") 
			}
			this.unit = e;
		},
        getName(){
            return this.name;
        },
        setName(e){
            if(typeof e !== 'string'){
                console.error('仅支持String 类型的参数！');
			}
			this.name = e;
        },
        /**
		 * 获得当前任务
		 */
		getTask (){
			return this.task;
		},
        /**
		 * 设置任务
		 */
		setTask(e){
			if(typeof e !== 'function'){
				console.error("仅支持Funtion 类型的参数！")
			}
			this.task = e;
        },
        /**
		 * 获得计数器
		 */
		getCounter(){
			return this.counter;
		},
        /**
		 * 启动
		 */
		start() {
			var that = this; // 保存当前对象this
			this.counter++;
			this.taskId = setTimeout(function() {
				that.start();
			}, this.unit);
			if(this.task!= null && typeof this.task === "function") {
				this.task(this.counter);
			}
			return this;
		},
		/**
		 * 完全终止
		 */
		stop(callback) {
			if(this.taskId != null && this.taskId != undefined) {
				this.counter = 0;
				clearTimeout(this.taskId);
			}
			if(callback!= null && typeof this.task === "function") {
				callback();
			}
			return this;
		},
		
		/**
		 * 暂停终止
		 */
		suspend(callback) {
			if(this.taskId != null && this.taskId != undefined) {
				clearTimeout(this.taskId);
			}
			if(callback!= null && typeof this.task === "function") {
				callback();
			}
			return this;
		}
    }
}
</script>
