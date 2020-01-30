const queueList = ()=>{
    let arr = [];  
    //压栈操作  
    this.push = function(element){  
        arr.push(element);  
    }  
        //退栈操作  
    this.pop = function(){  
        return arr.pop();  
    }  
        //获取栈顶元素  
    this.top = function(){  
        return arr[arr.length-1];  
    }  
        //获取栈长  
    this.size = function(){  
        return arr.length;  
    }  
        //清空栈  
    this.clear = function(){  
        arr = [];  
        return
    }  

    this.toString = function(){  
        return arr.toString();  
    }  
}
export default queueList;