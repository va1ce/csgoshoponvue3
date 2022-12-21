<template>
    <div class="payout">
        <div class="payout-item">
            <div class="payout-item__name">
                Комиссия за перевод:
            </div>
            <div class="payout-item__total payout-item__total--red">
                {{commisionValue}} ₽
            </div>
        </div>
        <div class="payout-item">
            <div class="payout-item__name">
                Всего к выплате:
            </div>
            <div class="payout-item__total payout-item__total--green">
                {{cartTotalCost}} ₽
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: "Payout",
    data() {
        return {
            commision: 0.05,
            commisionValue:0
        }
    },
    computed: {
        ...mapGetters(['ITEMS_FOR_SALE']),
        cartTotalCost() {
            let result = []
            this.commisionValue = 0
            if (this.ITEMS_FOR_SALE.length) {
                for (let item of this.ITEMS_FOR_SALE) {
                    result.push(item.price);
                }
                let summ = result.reduce((acc, number) => parseFloat(acc) + parseFloat(number));
                this.commisionValue = summ * this.commision
                this.commisionValue = parseFloat(this.commisionValue)
                summ = parseFloat(summ) - parseFloat(this.commisionValue)
                this.commisionValue = this.commisionValue.toFixed(2)
                return summ.toFixed(2);
            } 
            else return 0;
        }
        
    },
}
</script>
<style lang="scss">
.payout {
    padding-top: 10px;

    &-item {
      padding-top: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      &__total {
        padding-right: 10px;

        &--red {
          color: #ed5656;
          font-size: 18px;
        }

        &--green {
          color: #82e42c;
          font-size: 20px;
          font-weight: 700;
        }
      }
    }
}
</style>