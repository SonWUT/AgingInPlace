function isMatch(list_selected_choices){
  const conditions = [
    ['2.21'],
    ['2.23', '2.51'],
    ['2.25', '2.776']

  ];
  //map the condtions to booleans values
  let  boolean_map = conditions.map(cond=>{
      return cond.filter(x => list_selected_choices.includes(x)).length ?  true : false;
  })
  return !boolean_map.includes(false);

}

console.log(isMatch(['2.21', '2.23', '2.25','.2.67','2.91']));

