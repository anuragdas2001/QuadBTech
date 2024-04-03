//store,next,action

export const loggerMiddleware = (store)=>{
    return function(next){
        return function(action){
            //log actions
            console.log("[LOG]:"+action.type+" "+new Date().toString());
            //log the modified state of app
            console.log(store.getState());
            //call next middleware in the pipeline
            //it should pass the action to the next middleware
            return next(action);
        }
    }
}