export default (init_model, view, renderer) => {
    let model = init_model

    function reduce(action) {
        switch (action.type) {
            case 'update_warnings': {
                const {warnings} = action
                return model.updateWarnings(warnings)
            }
            default:
                return model
        }
    }

    return action => {
        model = reduce(action, model)
        renderer(view(model))
    }
}