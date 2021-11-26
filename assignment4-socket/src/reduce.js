export function reduce(init_model, action) {
    let model = init_model
    console.log(action)

    switch (action.type) {
        case 'warnings':
            const { newWarnings } = action
            return model.updateWarnings(newWarnings)

        default:
            return model
    }
}