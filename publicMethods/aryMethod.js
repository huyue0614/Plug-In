;(function () {
    //数组的去重方法
    function removal() {
        //双重循环去重
        Array.prototype.removalJump = function(){
            var arr = this,result = [],i,j,len = arr.length;
            for(i = 0; i < len; i++){
                for(j = i + 1; j < len; j++){
                    if(arr[i] === arr[j]){
                        j = ++i;
                    }
                }
                result.push(arr[i]);
            }
            return result;
        };

    //   双重循环splice去重
        Array.prototype.removalSplice=function () {
            var arr=this,i,j,len=arr.length;
            for(i=0;i<len;i++){
                for(j=i+1;j<len;j++){
                    if(arr[i]===arr[j]){
                        arr.splice(j,1);
                        len--;
                        j--;
                    }
                }
            }
            return arr;
        };

    //   利用对象属性名不能重复的特性
        Array.prototype.removalAttr=function () {
            var arr=this,i,result=[],obj={},len=arr.length;
            for(i=0;i<len;i++){
                if(!obj[arr[i]]){  //如果能查到，证明数组元素重复了。
                    obj[arr[i]]=1;
                    result.push(arr[i]);
                }
            }
            return result;
        };

    //  利用递归的思想去进行去重
        Array.prototype.removalRecursion=function () {
            var arr=this,len=arr.length;
            arr.sort(function (a,b) {
                return a-b;
            });
            function loop(index) {
                if(index>=1){
                    if(arr[index] === arr[index-1]){
                        arr.splice(index,1);
                    }
                    loop(index-1);
                }
            }
            loop(len-1);
            return arr;
        };

    //    利用indexOf以及forEach
        Array.prototype.removalErgodic=function () {
            var arr=this,result=[],len=arr.length;
            arr.forEach(function (v,i,arr) {  //这里利用map，filter方法也可以实现
                var bool=arr.indexOf(v,i+1); //从传入参数的下一个索引值开始寻找是否存在重复
                if(bool===-1){
                    result.push(v);
                }
            });
            return result;
        };
    }
    removal();
    //数组排序的方法
    function sorting() {
        //冒泡排序法
        Array.prototype.bubbleSort=function () {
            var arr=this,i,j,d,len=arr.length;
            for(i=0;i<len;i++){
                for(j=0;j<len;j++){
                    if(arr[i]<arr[j]){
                        d=arr[j];
                        arr[j]=arr[i];
                        arr[i]=d;
                    }
                }
            }
            return arr;
        };


        //sort排序
        Array.prototype.sortIng=function () {
            var arr=this;
            return arr.sort(function (a,b) {
                return a-b;
            })
        };


        //快速排序
        Array.prototype.fastSort=function () {
            var arr=this;
            var quickSort=function (arr) {
                if (arr.length <= 1) { return arr; }
                var pivotIndex = Math.floor(arr.length / 2);   //基准位置（理论上可任意选取）
                var pivot = arr.splice(pivotIndex, 1)[0];  //基准数
                var left = [];
                var right = [];
                for (let i = 0; i < arr.length; i++){
                    if (arr[i] < pivot) {
                        left.push(arr[i]);
                    } else {
                        right.push(arr[i]);
                    }
                }
                return quickSort(left).concat([pivot], quickSort(right));
            };
          return quickSort(arr);
        }


        //插入排序
        Array.prototype.insertSort=function () {
            var arr=this;
            var len = arr.length;
            for (var i = 1; i < len; i++) {
                var key = arr[i];
                var j = i - 1;
                while (j >= 0 && arr[j] > key) {
                    arr[j + 1] = arr[j];
                    j--;
                }
                arr[j + 1] = key;
            }
            return arr;
        }
    }
    sorting();
})();



