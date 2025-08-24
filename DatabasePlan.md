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
