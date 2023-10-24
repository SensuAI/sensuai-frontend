
export function promos(gas_quantity: any, additional_services: any, last_visited: any, last_payment_method: any, all_amounts: any, minutes_transaction: any): Array<any> {
    let date: Date = new Date();
    let plate_date: Date = new Date(last_visited);
    let actual_day: number = date.getDay();
    let actual_month: number = date.getMonth();
    let actual_year: number = date.getFullYear();
    let plate_day: number = plate_date.getDay();
    let plate_month: number = plate_date.getMonth();
    let plate_year: number = plate_date.getFullYear();
    
    const kilometers: any = gas_quantity * 12;
    var final_array: Array<any> = [];
    if (kilometers >= 6000) {
        final_array.push("Haz recorrido mas de 6000km realiza un cambio de aceite con un descuento del 10%");
    }
    if ((additional_services >= 10) && (additional_services <= 20)) {
        final_array.push("Haz realizado mas de 10 servicios adicionales, aprovecha un descuento del 15% en tu proximo servicio");
    }
    if (last_payment_method == "CreditCard") {
        final_array.push("Paga con tarjeta de credito BBVA y recibe puntos dobles en tu próxima carga");
    }
    if (last_payment_method == "Cash") {
        final_array.push("Recarga 500 pesos o mas en efectivo y recibe $200 en vales de gasolina");
    }
    if (all_amounts >= 10000) {
        final_array.push("Por tu preferencia recibe $100 gratis en tu próxima carga");
    }
    if ((all_amounts >= 2000) && (all_amounts <= 9999)) {
        final_array.push("Recibe %10 de descunto en dulceria en Cinemex");
    }
    if (all_amounts >= 1000) {
        final_array.push("Recibe $10 en productos oxxo en tienda oxxo mas cercana");
    }
    if (actual_year > plate_year) {
        final_array.push("Recibe un descuento del 5% en tu proxima recarga");
    }
    if (plate_day > actual_day) {
        final_array.push("Recibe un descuento del $50 en tu proxima recarga");
    }
    return final_array;
}

