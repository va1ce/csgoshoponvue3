<template>
    <div class="sidebar">
        <form class="sidebar__form form">
            <div class="form-list">
                <formSlider :sliderOptions="filterOptions.priceOption" :areDefaultSidebarVisible="true" @select="priceSliderValue" :resetAllFilter="resetAllFilter" />
                <checkboxGroup :sidebarOptions="filterOptions.typeOption" @select="optionsSelect" :resetAllFilter="resetAllFilter"/>
                <checkboxGroup :sidebarOptions="filterOptions.wearOption" @select="optionsSelect" :resetAllFilter="resetAllFilter"/>
                <checkboxGroup :sidebarOptions="filterOptions.holdOption" @select="optionsSelect" :resetAllFilter="resetAllFilter"/>
                <formSlider :sliderOptions="filterOptions.floatOption" @select="floatSliderValue" :resetAllFilter="resetAllFilter"/>
                <checkboxGroup :sidebarOptions="filterOptions.otherOption" :areDefaultSidebarVisible="true" @select="optionsSelect" :resetAllFilter="resetAllFilter"/>
                
            </div>
            {{this.selectedCheckboxGroup}}
            {{selectedPrice}}
            {{selectedFloat}}
        </form>
        <button class="form__reset" @click="resetFilters">Сбросить фильтры</button>
    </div>
</template>

<script>
import checkboxGroup from "./checkboxGroup.vue";
import formSlider from "./formSlider.vue";

export default {
    name: 'sidebar',
    components: {
        checkboxGroup,
        formSlider
    },
    data() {
        return {
            options: [
                { name: 'Тип', value: 1, checkboxes: ['Нож', 'Пулемет', 'Пистолет', 'Винтовка', 'Дробовик', 'Снайперская винтовка', 'Подарок', 'Именной ярлык', 'Патч', 'Наклейка', 'Перчатки', 'Контейнер', 'Ключ'] },
                { name: 'Износ', value: 2, checkboxes: ['Прямо с завода', 'Немного поношенное', 'После полевых испытаний', 'Поношенное', 'Закалённое в боях', 'Не покрашено'] },
                { name: 'Холд', value: 3, checkboxes: ['Без холда', '1 день', '2 дня', '3 дня', '4 дня', '5 дней', '6 дней', '7 дней', '8 дней'] },
                { name: 'Float', value: 4, checkboxes: [] },
                { name: 'Другое', value: 5, checkboxes: ['Стикеры', 'StatTrak™', 'Сувенирные'] },
            ],
            filterOptions: {
                priceOption: { name: 'Цена', value: 1, },
                typeOption: { name: 'Тип', value: 2, checkboxes: [{name:'Нож', id:1},{name:'Пулемет', id:2},{name:'Пистолет', id:3},{name:'Винтовка', id:4},{name:'Дробовик', id:5},{name:'Снайперская винтовка', id:6},{name:'Подарок', id:7},{name:'Именной ярлык', id:8},{name:'Патч', id:9},{name:'Наклейка', id:10},{name:'Перчатки', id:11},{name:'Контейнер', id:12},{name:'Ключ', id:13}] },
                wearOption: { name: 'Износ', value: 3, checkboxes: [{name:'Прямо с завода', id:14},{name:'Немного поношенное', id:15},{name:'После полевых испытаний', id:16},{name:'Поношенное', id:17},{name:'Закалённое в боях', id:18},{name:'Не покрашено', id:19}] },
                holdOption: { name: 'Холд', value: 4, checkboxes: [{name:'Без холда', id:20},{name:'1 день', id:21},{name:'2 дня', id:22},{name:'3 дня', id:23},{name:'4 дня', id:24},{name:'5 дней', id:25},{name:'6 дней', id:26},{name:'7 дней', id:27},{name:'8 дней', id:28}] },
                floatOption: { name: 'Float', value: 5, },
                otherOption: { name: 'Другое', value: 6, checkboxes: [ {name:'Стикеры', id:29},{name:'StatTrak™', id:30},{name:'Сувенирные', id:31}] },
            },
            selectedCheckboxGroup: [],
            selectedPrice: {
                gte: "",
                lte: ""
            },
            selectedFloat: {
                gte: "",
                lte: ""
            },
            resetAllFilter: false,
        }
    },
    methods: {
        optionsSelect(option) {
            if (this.selectedCheckboxGroup.includes(option)) {
                this.selectedCheckboxGroup.splice(this.selectedCheckboxGroup,1)
                this.$emit('optionsSelect',this.selectedCheckboxGroup)
            }
            else {
                this.selectedCheckboxGroup.push(option)
                this.$emit('optionsSelect',this.selectedCheckboxGroup)
            }  
        },
        priceSliderValue(option) {
            this.selectedPrice.gte = option.gte
            this.selectedPrice.lte = option.lte
            this.$emit('priceSliderValue',this.selectedPrice)
        },
        floatSliderValue(option) {
            this.selectedFloat.gte = option.gte
            this.selectedFloat.lte = option.lte
            this.$emit('floatSliderValue',this.selectedFloat)
        },
        resetFilters() {
            this.selectedCheckboxGroup=[]
            this.selectedPrice.gte = ""
            this.selectedPrice.lte = ""
            this.selectedFloat.gte = ""
            this.selectedFloat.lte = ""
            this.resetAllFilter = true
            this.$emit('priceSliderValue',this.selectedPrice)
            this.$emit('floatSliderValue',this.selectedFloat)
            this.$emit('optionsSelect',this.selectedCheckboxGroup)
            setTimeout(() => {this.resetAllFilter = false}, 1000);
        }
        
    }

}
</script>

<style>
.sidebar {
    padding: 5px 20px 25px 0;
}
</style>