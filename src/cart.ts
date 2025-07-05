export interface Buyable {
    id: number;
    name: string;
    price: number;
}

export default class Cart {
    private items: Buyable[] = []

    add(item: Buyable): void {
        this.items.push(item)
    }
    
    get all(): Buyable[] {
        return [...this.items]
    }
    
    getTotalCost(): number {
        return this.items.reduce((total, items) => total + items.price, 0)
    }

    getTotalDiscountCost(discount: number): number {
        const totalCost = this.getTotalCost()
        return totalCost - (totalCost * discount / 100)
    }

    removeById(id: number): void {
        this.items = this.items.filter(item => item.id !== id)
    }
}