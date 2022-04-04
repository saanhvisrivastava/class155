AFRAME.registerComponent('Game-play',{
    schema:{
        elementId:{
            type:'String',
            default:'#ring'
        }
    },



    isCollided:function(elementId){
        const element=document.querySelector(elementId)
        element.addEventListener('collide',e=>{
            if(elementId.includes('#ring')){
                console.log(elementId+'collision')
            }

           else if(elementId.includes('#hurdle')){
                console.log(elementId+'collision')
            }
        })
    },

    update:function(){
        this.isCollided(this.data.elementId)
    }

})
