zQuery是模仿jQuery的一个精简版，目前仅有的功能是把经常用到的选择器部分拿出来了。关于其用法api如下所示：

1 选择器使用
  1.1 传入空字符串 如 z('');  
  
  1.2 传入dom 如 z(document.getElementsByTagName('div')[0])
  
  1.3 传入字符串body 如z('body')
  
  1.4 传入id 如z('#fn-z-news')
  
  1.5 传入class 如z('.fn-z-news')
  
  1.6 传入2个字符串，第一个字符串为要选择的元素，第二个字符串表示在这个范围内选择 如 z('.fn-z-newsli','.fn-z-newsul') 表示在class为fn-z-newsul里面       找class为fn-z-newsli的元素。z('.fn-z-newsli','#fn-z-newsul')表示在id为fn-z-newsul里面找class为fn-z-newsli的这个元素。
  
2 新增属性和方法
  
  用例：给zQuery添加方法和属性
  
      z.extend({
        'min':function(a,b){
          a>b?b:a
        },
        'max':function(a,b){
          a>b?a:b
        }
      })
      
      z.min(2,3) //2
      z.max(2,4) //4
      
  用例: 给对象添加方法和属性
  
      z.fn.extend({
        'min':function(a,b){
          a>b?b:a
        },
        'max':function(a,b){
          a>b?a:b
        }
      })
      
      z('#fn-z-news').min(2,3) //2
      z('#fn-z-news').max(2,3) //3
