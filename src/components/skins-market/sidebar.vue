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
        </form>
        <button class="form__reset" @click="resetFilters">Сбросить фильтры</button>
    </div>
</template>

<script>
import checkboxGroup from "../checkboxGroup.vue";
import formSlider from "../formSlider.vue";

export default {
    name: 'sidebar',
    components: {
        checkboxGroup,
        formSlider
    },
    data() {
        return {
            filterOptions: {
                priceOption: { name: 'Цена', value: 1, },
                typeOption: { name: 'Тип', value: 2, checkboxes: [{name:'Нож', id:1,type:"Knife"},{name:'Пулемет', id:2,type:"Machinegun"},{name:'Пистолет', id:3,type:"Pistol"},{name:'Винтовка', id:4,type:"Rifle"},{name:'Дробовик', id:5,type:"Shotgun"},{name:'Снайперская винтовка', id:6,type:"Sniper Rifle"},{name:'Подарок', id:7,type:"Gift"},{name:'Именной ярлык', id:8,type:"Tag"},{name:'Патч', id:9,type:"Patch"},{name:'Наклейка', id:10,type:"Sticker"},{name:'Перчатки', id:11,type:"Gloves"},{name:'Контейнер', id:12,type:"Container"},{name:'Ключ', id:13,type:"Key"}] },
                wearOption: { name: 'Износ', value: 3, checkboxes: [{name:'Прямо с завода', id:14, type:"Factory New"},{name:'Немного поношенное', id:15, type:"Minimal Wear"},{name:'После полевых испытаний', id:16, type:"Field-Tested"},{name:'Поношенное', id:17, type:"Well-Worn"},{name:'Закалённое в боях', id:18, type:"Battle-Scarred"},{name:'Не покрашено', id:19, type:"Not Painted"}] },
                holdOption: { name: 'Холд', value: 4, checkboxes: [{name:'Без холда', id:20, type:"Without hold"},{name:'1 день', id:21, type:"1 day"},{name:'2 дня', id:22, type:"2 days"},{name:'3 дня', id:23, type:"3 days"},{name:'4 дня', id:24, type:"4 days"},{name:'5 дней', id:25, type:"5 days"},{name:'6 дней', id:26, type:"6 days"},{name:'7 дней', id:27, type:"7 days"},{name:'8 дней', id:28, type:"8 days"}] },
                floatOption: { name: 'Float', value: 5, },
                otherOption: { name: 'Другое', value: 6, checkboxes: [ {name:'Стикеры', id:29, type:"Sticker"},{name:'StatTrak™', id:30, type:"StatTrak™"},{name:'Сувенирные', id:31, type:"Souvenir"}] },
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
                this.selectedCheckboxGroup.splice(this.selectedCheckboxGroup.indexOf(option),1)
            }
            else {
                this.selectedCheckboxGroup.push(option)
            }
            this.$emit('optionsSelect',this.selectedCheckboxGroup)
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

<style lang="scss">
.sidebar {
    padding: 5px 20px 25px 0;
}
.form__reset {
    margin-top: 20px;
    height: 36px;
    width: 100%;
    border-radius: 4px;
    border: 1px solid var(--white-color);
    text-align: center;
    line-height: 36px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    color: var(--main-color);
    cursor: pointer;
    opacity: .5;
    transition: 0.6s linear;
    box-sizing: border-box;
    background-color: transparent;  
    &:hover {
        opacity: 1;
    }
}
</style>