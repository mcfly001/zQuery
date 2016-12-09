/**
 * Created by zyj on 2016/12/8.
 */
;(function(window,undefine){
    'use strict';
    var zQuery=(function(){
        var zQuery=function(selector,context){
            return  new zQuery.fn.init(selector,context);
        }
        zQuery.prototype=zQuery.fn={
            'constructor':'zQuery',
            'init':function(selector,context){
                var domArray=[];
                //z('');
                if(!selector){
                    return this;
                }
                //z(document.getElementsByTagName('div')[0])
                if(selector.nodeType){
                    this.context=this[0]=selector;
                    this.length=1;
                    return this;
                }
                //z('body')
                if(selector==='body' && !context && document.body){
                    this.context=document;
                    this[0]=document.body;
                    this.selector=selector;
                    this.length=1;
                    return this;
                }
                //z('#fn-z-news')
                if(selector.indexOf('#')===0){
                    this.context=document.getElementById(selector.substr(1,selector.length));
                    this[0]=document.getElementById(selector.substr(1,selector.length));
                    this.selector=selector;
                    this.length=1;
                    return this;
                }
                //z('.fn-z-news')
                if(selector.indexOf('.')===0 && !context){
                    this.context=document;
                    this.length=document.getElementsByClassName(selector.substr(1,selector.length)).length;
                    for(var i =0;i<this.length;i++){
                        this[i]=document.getElementsByClassName(selector.substr(1,selector.length))[i]
                    }
                    this.selector=selector;
                    return this;
                }
                //z('.fn-z-news','.fn-z-newsul') z('.fn-z-news','#fn-z-newsul')
                if(selector.indexOf('.')===0){
                    for(var i=0;i<document.getElementsByClassName(selector.substr(1,selector.length)).length;i++) {
                        if (context.indexOf('#') === 0 && document.getElementsByClassName(selector.substr(1, selector.length))[i].parentNode.id === context.substr(1, context.length)) {
                            domArray.push(document.getElementsByClassName(selector.substr(1, selector.length))[i])
                        }
                        if (context.indexOf('.') === 0 && document.getElementsByClassName(selector.substr(1, selector.length))[i].parentNode.className === context.substr(1, context.length)) {
                            domArray.push(document.getElementsByClassName(selector.substr(1, selector.length))[i])
                        }
                    }
                    for(var i=0;i<domArray.length;i++){
                        this[i]=domArray[i];
                    }
                    this.length=domArray.length;
                    this.context=document;
                    this.selector=selector;
                    return this;
                }
            },
            'html':function(){
                
            }
        }
        return zQuery;
    })();
    //这里把接口暴露出来为了新增属性、方法等
    zQuery.extend=zQuery.fn.extend=function(){
        var target=arguments[0] || {},i= 1,length=arguments.length,deep=false,options
        if(typeof target ==='boolean'){
            deep=target;
            target=arguments[1] || {};
            i=2;
        }
        if(typeof target !=='object' && !jQuery.isFunction(target)){
            target={};
        }
        if(length==i){
            target=this;
            --i;
        }
        for(;i<length;i++){
            if((options=arguments[i])!=null){
                for(var name in options){
                    var src=target[name],copy=options[name];
                    if(target===copy){
                        continue;
                    }
                    if(deep && copy && typeof copy==='object' && !copy.nodeType){
                        target[name]=jQuery.extend(deep,src || (copy.length!=null?[]:{}),copy)
                    }
                    else if(copy !==undefined){
                        target[name]=copy;
                    }
                }
            }
        }
        return target;
    };
    //这里是给zQuery添加一些静态方法和属性，使用时候就z.clone();
    zQuery.extend()
    zQuery.fn.init.prototype=zQuery.fn;
    window.z=window.zQuery=zQuery;
})(window);