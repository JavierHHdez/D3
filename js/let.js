var myPlugin = {

    property: {
        width       : null,
        height      : null,
        background  : null,
        color       : null,
        text        : null
    },
    oninit : function(prop, el){
        this.property.width = prop.width;
        this.property.height = prop.height;
        this.property.background = prop.background;
        this.property.color = prop.color;
        this.property.text = prop.text;

        this.css(this.property, el);
    },
    css : function(prop, el){
        el.style.width = prop.width;
        el.style.height = prop.height;
        el.style.background = prop.background;
        el.style.color = prop.color;
        el.innerHTML  += prop.text;
    }
}

var selector = document.getElementById('app');

/*myPlugin.oninit({
    width: 50,
    height: 60,
    background: '#666',
    color: '#fff',
    text: 'coco lab'
}, selector)*/