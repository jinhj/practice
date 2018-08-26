
    /* 객체 도입 전
      function LinksSetColor(color){
        var alist = document.querySelectorAll('a');
        var i = 0;
        while(i < alist.length){
          alist[i].style.color = color;
          i = i + 1;
        }
      }

      function BodySetColor(color){
        document.querySelector('body').style.color= color;
      }

      function BodySetBackgroundColor(color){
        document.querySelector('body').style.backgroundColor= color;
      }

      function nightDayHandler(self){
        var target = document.querySelector('body');

        if(self.value ==='Night'){
          BodySetBackgroundColor('black');
          BodySetColor('white');
          self.value = 'Day';

          LinksSetColor('powderblue');
        } else{
          BodySetBackgroundColor('white');
          BodySetColor('black');
          self.value = 'Night';

          LinksSetColor('blue');
          }
        }
        */

      var Links = {
        setColor : function(color){
          var alist = document.querySelectorAll('a');
          var i = 0;
          while(i < alist.length){
            alist[i].style.color = color;
            i = i + 1;
          }
        }
      }

      var Body = {
        setColor : function(color){
          document.querySelector('body').style.color= color;
        }, //객체의 property를 구분하기 위해 쉼표가 필요핟!!

        setBackgroundColor : function(color){
          document.querySelector('body').style.backgroundColor= color;
        }
      }

      function nightDayHandler(self){
        var target = document.querySelector('body');

        if(self.value ==='Night'){
          Body.setBackgroundColor('black');
          Body.setColor('white');
          self.value = 'Day';

          Links.setColor('powderblue');
        } else{
          Body.setBackgroundColor('white');
          Body.setColor('black');
          self.value = 'Night';

          Links.setColor('blue');
          }
        }
