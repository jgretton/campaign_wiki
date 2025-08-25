# Database plan

## Items

```Typescript
interface Item{
    name: string,
    description: string,
    type: ENUM ITEM_TYPE,
    cost: number,
    weight: number,
}
```

```Typescript
enum ITEM_TYPE{
    Item,
    Armour,
    Weapon
}
```

## Characters

I have split the Character into public and dm. The reasoning behind this is that i want to be able to allow the public to view the details of the character but not the stats (as this is reserved for me, the DM). My plan is to add a URL query ?view=dm that will return the full Character. If the url does not include this query i will only return Character.public.

Draft has been included so I can add characters whenever i need to and stop them from being viewed by the public. DM view will return all characters but i will display a label stating which ones are draft.

```Typescript
interface Character{
    public:{
        name: string,
        age: string | number,
        appearance:string,
        description: string, // History and information about the character
        additional_notes?: Additional_Notes[], // this is more for session update (eg. Session 3 - players find out X was part of the Watchers cult)
        related_characters?: string[], //array of character ids
        languages:string[],
        location: string | 'unknown' // location id
        profession: "merchant" | "guard" | "noble" | "clergy" | "criminal" | "other",
        status: "met" | "heard_about" | "unknown",
    }
    dm:{
        immunities:string[],
        stats: Stats,
        alignment: string,
    }
    draft: boolean, // so i can create them but they wont be seen publically
}

interface Stats{
    ac: number, //armour class
    speed: number,
    hp:number, //hit points
    cr:number, //challenge rating

    con: Stat
    str: Stat,
    dex: Stat,
    int:Stat,
    wis:Stat,
    cha:Stat,

    traits: Additional_Info[],
    actions: Additional_Info[],
}

interface Stat{
    value: number,
    modifier: number,
    save:number,
}

interface Additional_Info {
    title: string,
    description: string,
}

interface Additional_notes{
    session: string,
    discovery:string,
}
```
