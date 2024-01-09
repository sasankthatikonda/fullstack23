const kohliFn = (req,res)=>{
    console.log("base path hitt");
    
    res.send({
        msg:"Sasank is big fan of Virat"
    })
}

const checkUser22 = (req, res) => {
    console.log(req.params);
    res.send({
        userId: `${req.params.userId}`,
        name: 'edo oka name'
    })
}
const baseFn = (req,res)=>{
    console.log("sasank Is Updated");
    res.send({
        msg:"Sasank Is also Big fan of RCB"
    })

}

const maxi =(req, res) => {
    console.log("Sasank's Fav league is Big Bash League",req.body)
    res.send({
        msg:{
            player:"Glenn Maxwell",
            jerseyNo:32,

        }
    })
}

module.exports = {
    kohliFn: kohliFn,
    baseFn: baseFn,
    maxi:maxi,
    checkUser22: checkUser22
}