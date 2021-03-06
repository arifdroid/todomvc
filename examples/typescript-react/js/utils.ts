import _ = require('lodash');
import moment = require('moment');


class Utils {

  public static uuid() : string {
    /*jshint bitwise:false */
    var i, random;
    var uuid = '';

    for (i = 0; i < 32; i++) {
      random = Math.random() * 16 | 0;
      if (i === 8 || i === 12 || i === 16 || i === 20) {
        uuid += '-';
      }
      uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random))
        .toString(16);
    }

    return uuid;
  }

  public static pluralize(count: number, word: string) {
    return count === 1 ? word : word + 's';
  }

  public static addTotal(list_1: number,list_2: number) {
    return list_1 + list_2;
  }

  public static sameTitleCheck(newTitle: string,listTodo: any) {

    let found = false;
    for (let j = 0; j < listTodo.length; j++) {
      if (listTodo[j].title == newTitle) {
        found = true;
      }
    }

    return found;

    // return list_1 + list_2;
  }
  
  public static sortAscend(listTodo: any) {


    const sortedArray = _.orderBy(listTodo, (o: any) => {

      if (o.dateCreated) {
        return moment(o.dateCreated).format("DD/MM/YYYY");
      } else return null;

    }, ['asc']);

    return sortedArray;

  }

  public static sortDesc(listTodo: any) {

    const sortedArray = _.orderBy(listTodo, (o: any) => {

      if (o.dateCreated) {
        return moment(o.dateCreated).format("DD/MM/YYYY");
      } else return null;

    }, ['desc']);

    return sortedArray;  
  }

  public static store(namespace : string, data? : any) {
    if (data) {
      return localStorage.setItem(namespace, JSON.stringify(data));
    }

    var store = localStorage.getItem(namespace);
    return (store && JSON.parse(store)) || [];
  }

  public static extend(...objs : any[]) : any {
    var newObj = {};
    for (var i = 0; i < objs.length; i++) {
      var obj = objs[i];
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          newObj[key] = obj[key];
        }
      }
    }
    return newObj;
  }
}

export { Utils };
