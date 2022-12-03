import { defineStore } from "pinia";
import moment from 'moment';
import { Time } from '@/interfaces/days';

export const useDaysStore = defineStore("DaysStore", {
    state: () => ({
        days: [],
    } as Time),
    actions: {
         getDays() {
const actualDate: number = parseInt(moment().format("YYYYMMDD")); 
const dayDate: number = parseInt(moment().format("DD"));
const christmasDate = 20221225;

actualDate <= christmasDate ? this.days = [...Array(dayDate).keys()] : this.days = [...Array(25).keys()];
this.days = this.days.map((day) => day + 1);
return this.days;
},
    }
});