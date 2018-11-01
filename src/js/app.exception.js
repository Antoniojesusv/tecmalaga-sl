function appException(features = {}){
    const {name = 'appException', msg = ''} = features;
    Error.call(this);
    this.name = name;
    this.msg = msg;
}