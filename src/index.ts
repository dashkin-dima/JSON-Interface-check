type reviverType = ((this: any, key: string, value: any) => any);

export const parse = <T extends object = {}>(text: string, reviver?: reviverType): T => {
  const parsed = JSON.parse(text, reviver);
  // TODO: 
  // создавать на основе типа/интерефейса объекты: requiredProperty, optionalProperty
  
  // проверять все ли ключи из requiredProperty соотвествуют типу parsed и присутствуют в parsed, 
  // если же какие-то ключи не удовлетворяют условию, то выводить ошибку:
  // not enough [keys] in [T]

  // проверять нет ли ключей в parsed, которые отсутствуют в optionalProperty
  // если же какие-то ключи не удовлетворяют условию, то выводить ошибку:
  // there are extra [keys] in the [T]

  return parsed;
}