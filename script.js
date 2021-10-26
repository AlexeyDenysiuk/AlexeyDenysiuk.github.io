

const form = document.getElementById("form_task3");
function retrieveFormValue(event){
event.preventDefault();
const A_length = form.querySelector('[name="A_length"]');
const B_length = form.querySelector('[name="B_length"]');
const C_length = form.querySelector('[name="C_length"]');

const values = {
    A_length: A_length.value,
    B_length: B_length.value,
    C_length: C_length.value
}
const a=Number(values.A_length), 
    b=Number(values.B_length),
    c=Number(values.C_length);

let result = "Error"
    if ( (b+c > a) && (a+c > b) && (a+b > c)) {
         result ="Triangle exists";
    } else {
         result = "Triangle not exist";
    }
    // alert(result);
    setCookie("result", result);


}

form.addEventListener('submit',retrieveFormValue);




//set cookie

function setCookie(name, value) {
    document.cookie = name + "=" + value;
    alert(document.cookie); //( unescape ( results[2] ) );   
}

function check_Cookie(cookie_name) {
    document.getElementById("form_task3").style.display = "none";
    var results = document.cookie.match('(^|;) ?' + cookie_name + '=([^;]*)(;|$)');

    if (results) {
        //alert("Do you want delete cookies?") 
        if (confirm('Delete cookies?')) {
            // Save it!
            //console.log('Thing was saved to the database.');

            var cookie_date = new Date();  // ������� ���� � �����
            cookie_date.setTime(cookie_date.getTime() - 1);
            document.cookie = cookie_name += "=; expires=" + cookie_date.toGMTString();
            document.getElementById("form_task3").style.display = "block";
        } else {
            alert(cookie_name + " = " + unescape(results[2]) + "\n\nrefresh page")
        }
    }
    else
        return alert("empty")//null;
}


//TASK5

let topPanel = document.getElementById('hdr');
let asidePanel = document.getElementById('asd')
let leftMainPanel = document.getElementById('leftmain')
let topMainPanel = document.getElementById('topmain')
let bottomMainPanel = document.getElementById('bottommain')
let bottomPanel = document.getElementById('ftr')

let form_header =  [topPanel,'form-header', false]
let form_aside =  [asidePanel,'form-aside', false]
let form_left_main =  [leftMainPanel,'form-left-main', false]
let form_top_main =  [topMainPanel,'form-top-main', false]
let form_bottom_main =  [bottomMainPanel,'form-bottom-main', false]
let form_footer =  [bottomPanel,'form-footer', false]


let forms = [form_header, form_aside, form_left_main, form_top_main, form_bottom_main, form_footer]

forms.forEach(element => {
    element[0].addEventListener('dblclick', (e) => createForm(element))
});

localStorage.li_counter = 1;

function createForm(form){
    if( !form[2] )
    {
        let form5 = document.createElement('form')
        let panel_identifier = form[1].slice(form[1].indexOf("-"), form[1].length);
        form5.id = 'task5-form' + panel_identifier

        let list5 = document.createElement('ol')
        list5.id = 'task5-list' + panel_identifier
    
        let br = document.createElement('br')
    
        let label = document.createElement('label')
        label.htmlFor = 'items-input'
        label.innerHTML = 'Enter an item:'
    
        let itemsInput = document.createElement('input')
        itemsInput.type = 'text'
        itemsInput.id = 'items-input' + panel_identifier
        itemsInput.placeholder = 'text...'
    
        let btn1 = document.createElement('input')
        btn1.type = 'submit'
        btn1.value = 'ADD'
        btn1.id = 'button5_add' + panel_identifier
        btn1.addEventListener('click', (e) => {
            e.preventDefault()
            addItem(itemsInput, list5)
        })
    
        let btn2 = document.createElement('input')
        btn2.type = 'submit'
        btn2.value = 'SAVE'
        btn2.id = 'button5_save' + panel_identifier
        btn2.addEventListener('click', (e) => {
            e.preventDefault()
            saveList(list5, form)
        })

       
        form5.appendChild(label)
        form5.appendChild(br)
        form5.appendChild(br)
        form5.appendChild(itemsInput)
        form5.appendChild(br)
        form5.appendChild(br)
        form5.appendChild(btn1)
        form5.appendChild(br)
        form5.appendChild(btn2)
    
        
        let squareNode = document.getElementById('square')
      
            document.getElementById(form[0].id).appendChild(form5)        
            form[2] = true;   
            document.getElementById(form[0].id).appendChild(list5)            
        
    }
    

}

function addItem(textbox, list)
{
    let str = textbox.value;

    if(str.length != 0)
    {
        let itemToAdd = document.createElement('li');
        itemToAdd.innerHTML = str;
        if (localStorage.li_counter.length%2==0){
            itemToAdd.style.color='#ffffff';
            itemToAdd.style.backgroundColor='#000000';
        } else{
            itemToAdd.style.color='#000000';
            itemToAdd.style.backgroundColor='#ffffff';
        }
        let temp =localStorage.li_counter;
        localStorage.li_counter= temp+1;
        list.append(itemToAdd); 

        
    }
}

function saveList(ulist, form)
{
    let panel_identifier = form[1].slice(form[1].indexOf("-"), form[1].length);
    let key = "task5-list" + panel_identifier

    if(ulist.children.length != 0)
    {
        var items = {
            'list': []
          };
          let id = '#' + ulist.id
          $(id).children().each(function(i,v){
              items.list.push({ 'id': i, 'value': $(v).text()});
            });
                        
          localStorage.setItem(key, JSON.stringify(items));

        //   form[0].innerHTML = ulist.innerHTML
    
    }

}




// $(window).on('load', function()
// {
//     form[0].innerHTML = ulist.innerHTML
// });


