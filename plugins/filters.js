import Vue from 'vue'

const filters = {
  formatDate(date) {
    if (date) {
      const cutDate = date.length <= 10 ? date : date.slice(0, 10);
      return cutDate.split('-').reverse().join('.');
    }
    return ''
  },
  formatPhone(phoneString) {
    const phone = phoneString.indexOf('+38') !== -1 ? phoneString.replace(/\+38/g, "") : phoneString;
    return `(${phone.slice(0, 3)}) ${phone.slice(3, 6)} ${phone.slice(6, 8)} ${phone.slice(8, 10)} ${phone.slice(10, 12)}`
  },
  formatAmountCop(data) {
    if (!data && data !== 0) return '';
    if (data === 0 || data === '0' || data === '00' || data === 0) return '0.00';
    const input = Math.round(data * 100) / 100;
    const reverseArrAmount = String(input).split('.')[0].split('').reverse();
    const amountCop = String(input).split('.').length > 1 ? String(input).split('.')[1] : 0;
    const amountCopStr = amountCop === 0 ? '00' : String(amountCop).length === 2 ? String(amountCop) : String(amountCop) + '0';
    const reverseSplitArrAmount = [];
    reverseArrAmount.forEach((item, i) => {
      if ((i + 1) % 3 === 0) {
        reverseSplitArrAmount.push(item)
        reverseSplitArrAmount.push(' ')
      } else {
        reverseSplitArrAmount.push(item)
      }
    });
    return `${reverseSplitArrAmount.reverse().join('')}.${amountCopStr}`;
  },
  formatAmountRound(data) {
    if (!data && data !== 0) return '';
    if (data === 0 || data === '0' || data === '00' || data === 0) return '0';
    const input = Math.round(data * 100) / 100;
    const reverseArrAmount = String(input).split('.')[0].split('').reverse();
    const reverseSplitArrAmount = [];
    reverseArrAmount.forEach((item, i) => {
      if ((i + 1) % 3 === 0) {
        reverseSplitArrAmount.push(item)
        reverseSplitArrAmount.push(' ')
      } else {
        reverseSplitArrAmount.push(item)
      }
    });
    return `${reverseSplitArrAmount.reverse().join('')}`;
  },
  formatAmountCut(data) {
    const reverseArrAmount = String(data).split('.')[0].split('').reverse();
    const reverseSplitArrAmount = reverseArrAmount.reduce((acc, item, i) => {
      if ((i + 1) % 3 === 0) {
        acc.push(item)
        acc.push(' ')
      } else {
        acc.push(item)
      }
      return acc
    }, [])
    return `${reverseSplitArrAmount.reverse().join('')}`;
  },
  formatThousandths(data) {
    return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  },
}

Vue.filter('FormatDate', filters.formatDate);
Vue.filter('FormatPhone', filters.formatPhone);
Vue.filter('FormatAmountCop', filters.formatAmountCop);
Vue.filter('FormatAmountRound', filters.formatAmountRound);
Vue.filter('FormatAmountCut', filters.formatAmountCut);
Vue.filter('FormatThousandths', filters.formatThousandths);
