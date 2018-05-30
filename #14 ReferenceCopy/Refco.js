    const players = ['Sean', 'Marvin', 'Tatiana', 'Weelo'];
    let age = 100
    let age2 = age
    console.log(age, age2)
    age = 92;
    console.log(age, age2)
    
    let name = 'Sean'
    let name2 = name
    console.log(name, name2)
    name = 'Jacob'
    console.log(name, name2)
    
    // const team = players
    const team = [...players]
    team[2] = 'Abigail'
    console.log(`${players} vs ${team}`)
   
    const person = {
      name: 'Sean Byrne',
      age: 26
    };

    // const captain = person;
    // captain.swag = 99;
    // console.log(person, captain)
    
    const cap2 = Object.assign({}, person, {position: 'baller' })
    console.log(person, cap2)

    const sean = {
        name: 'Sean Byrne',
        height: '5 11',
        weight: 150,
        hobbies: {
            physical: 'Running',
            technical: 'Bitcoin',
            spiritual: 'Reading/ Writing'
        }
    }
    const SEAL = Object.assign({}, sean)
    SEAL.weight = 160;
    SEAL.hobbies.physical = 'Strength Training'
    console.log(sean, SEAL)