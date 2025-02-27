declare interface IFieldSchema {
    name: string,
    readableName: string,
    type: resourceType | 'text' | 'textfield' | 'code' | 'number' | 'sliderAndNumber' | 'point2D' | 'checkbox' | 'color',
    required: boolean
    array: boolean,
    fixedLength?: number
}
