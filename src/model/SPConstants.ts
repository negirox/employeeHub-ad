import { mergeStyleSets } from "office-ui-fabric-react";

export const popupStyles = mergeStyleSets({
    root: {
      background: 'rgba(0, 0, 0, 0.2)',
      bottom: '0',
      left: '0',
      position: 'fixed',
      right: '0',
      top: '0',
    },
    content: {
      background: 'white',
      left: '50%',
      maxWidth: '70%',
      width:'60%',
      padding: '1.5rem',
      position: 'absolute',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      //borderTop: '4px solid rgb(0, 85, 150)',
      maxHeight: '70%',
      overflow: 'auto',
      //scrollbar: "thin",
      //scrollbarWidth:'thin',
      //scrollbarColor:'#c0bebe',
      fontSize: '12px'
    },
  });
export const ListNames = {
  UserMaster:'User Master',
  Applications: 'Applications',
  UserApplications:'UserApplications',
  AdminConfiguration : 'AdminConfiguration',
  LogList:'Log'
}
export const ToastrSettings = {
  WithButton: {
      "positionClass": 'toast-top-full-width',
      "closeButton": true,
      "newestOnTop": false,
      "progressBar": true,
      "preventDuplicates": false,
      "showDuration": "0",
      "hideDuration": "300",
      "timeOut": "5000",
      "extendedTimeOut": "0",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
  },
  AutoHide: {
      positionClass: "toast-top-full-width",
      hideDuration: 300,
      timeOut: 3000,
  }
}

export const postheaders = {
  headers: {
      'Accept': 'application/json;odata=nometadata',
      'Content-type': 'application/json;odata=nometadata',
      'odata-version': ''
  },
  body: ''
};
export const putHeaders = {
  headers: {
      'Accept': 'application/json;odata=nometadata',
      'Content-type': 'application/json;odata=nometadata',
      'odata-version': '',
      'IF-MATCH': '*',
      'X-HTTP-Method': 'MERGE'
  },
  body: ''
}
export const AvtarMale = `data:image/png;base64,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`;
export const AvtarFemal = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJIAAADNCAYAAABToymsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAArvSURBVHgB7Z1vUlpZE4dbKEujH8IO5uaLRsuq6Apys4KYFcSswMwKxBUYVxBcQcwKZFYgb1VKkS/vnR04HyKkUpDpJgcH/6ACF+ju83uqKElGMnp56HNO3z59iAAAAAAAAAAA6GWOwB1OT09L8/PzSbFY3Jybmyv9+vXrUh6dTifb2NioEbgDROrj4uJim4XZ5afpA9+WsVxVlmp/bW0tI9AFIjHn5+cpy/GZnybDvI5fU4FQvylQ5DQajQMW4oSGlEjg6LUjrz07O9umyIk6IvFQ9oVlyEUCFqq8urq6T5ESrUgSiXhY+kg5wv/eu/X19WOKkChFqtfrItAB5Y+s7rZinDNFN0fiiXXCX3ZpMpTCpD06Ypxsl2mEifUQpLIKpMiITiSOGK9pwuQ1gbdEVCJJwpEmG426FAqF9xQZUYnEkSKl6VD69u3bJkVEbEPbK5oScp+OIiL6zPak4OhXooiIQiS5mx9yRwlNCZ4nvY3p1onrhGTIGZXlTZ1hhMj4/y03divkGJciSQRaXl7ey/sWyJi4FsqdSDKEca5oT/EcRYR64+02ihuRJAotLS0dSGkH6UeqLff5Bu8ncoILkWQuxFHoCz81teT2VHpiXqQg0UiFaRqQKkuW6QMZx7RI1iXq4UEms3kkLxIJMq/j+4B7ZBizIo1SrK8ZlqnMCUxN6YqhMClS+PSm5AxOnO6FJKo5zIkkF1o+veQTsxWW5kTiT+0kaq01IRWWO2QMU6u2sJHxhPyTNZvNLeaSjGAqIsmtD4qDZGFhYYcMYUakRqMhWeuUIsFaua4Zkdrtttml8YhsWtqNYkYkqSmiyLC0G8WESKHdTFSlq4Kl4c2ESJ1OJ9ZuHyUrw5sJkaaxqVErVoY39SKF1VpCkcLD29S2UI2DepF4tRbV/rB7SKX6k5SjXiQe1mIXiRYXF9VfAwtzJBOhfZLwPAki5UBKkVMsFtV/mFSLFCba0YOINCZ8ARMCQkLKUS0SJyIRkX5T0l45qX2OlBDoon14Uy0SL/3/INBFzkQhxWifI70g0CMhxSAiGYFvlai+FmpFsrotZ1LwwkN1dNYckRIC12iPzughaQdMtkckIdAPRBqRhMANNM8bMbSBXFArkvYE3IxISClqRYpx14hlMLQZQvOHC0ObITRfE80R6TkBM2BoA7kAkUAuQCSQC5pF+oeAGVSKFA6miXa//yCkY53W2yTqRApbkA6QkLyXRGsPTXUidTqdHQIPkWg8eFmdSIhEj1MsFtVdI6zaQC5oFCkj8CDtdltd/22IZJCNjY0aKUOdSDz+q7tIylB5fdSJND8/nxEYCK9q/yaFqBPpxYsXl7xyU3mxNMB5JESkIagSGESVFKJSJK2fOg20Wi1EpKfCQxtEup+a1qO3VIq0uLhY46hk5qyyaaE5UqsUKUy4EZVuwSu2v0gpmm+RfCVwmyopRfO+NkSkm9TW1tYyUopakfiiVTFP+g/Nw5qgvavtIYEu/KH6RIpRLRKv3uTiZRQ5LFFF87AmqBZJVm+FQuEdRSwTS3R8dXX1Jylnjowgtdzfv3/PlpaW/u+9ilIiEA/r+/JceyTqYUakHvV6XYrfU3IMf1A+sEAVMoTFUtsY8ktVMoY5kXjOVCXfqM4XDcKcSCsrKzXP9Ura80WDsLqLpEJO0Z4vGoRVkarkE5PDmmBSJLl9Qg5l4iHbbCbf8gZJj6u3KhnFrEgLCwsVTzd1LdwGeQizIsntE083dXuZbKuY3vsvN3U9RCXr0UgwLZKXqGQ9Ggnmu5FYj0oeopFgXiTrUclDNBJc9EeyWgDHeaN9D9FIcCFS2L70gWyRtVotk7dD7sNNx7aQ7TYzxPGQ9qfWXbOj4Kr1Hycpy2RgiJM53fr6+jE5wlyF5GNISS4PcyeKy3FrL1++3CJnuGtGKvVKvKR+ozQlUGs2m2/IIe4iUg+Fkakrkad5UT9u2yOHSko11YZSIuJVIsF1n21+8zS9cRk5Bg3bQS5AJJALEAnkAkQCuQCRQC64FomTkpqy2wk5xntEek5gKnjPI70gPSTkGO9D2x+khEKhoOZnmQRuRQqHLKuBo6O6c2jzxK1I/MYlpIuEHONZpJR0UdJ4OnZeuBWJ50evSRk8T0rJKS5FOj8/TzTOSVikt+QUrxEpJZ2kp6enLjvyuhSJh7U9Usri4uJHcog7kXhY2yHFKySWfNdjVHInkuZoFCh5jEquRKrX6/IGJaQciUqyICBHuBFJ3hgD0ahHiX/Wz+QINyLxG/PF2Bkl6dnZmZshzoVIFxcXEonMZY05r3TAkTQlB5jfICkScSQqk12kk8oWWv/NEAcSCTJfOrE++TYbkZxI1E/Gv88bdP6fIo1G48CZRIKsOk+tzplMRaSwxJdlc0qO4d+xvLq6aqq3pBmReKm8XSwWP3s/hrSPajhJMiMDqBdJQn1INKYUIRKdOp3OkXah1IoUu0C3yPhaVKWVslahVIkk8nA4lyHsfURD2LDU+HHE1+dYk1QzFUnKKfhO+CZneN/zH7chz9DU5OhSflQ2NjZqNEOmLlKQZ5tD9Xt+bEKe3OgNf0ehVfRUmYpIIs+zZ892+KnULKcEJk1Xqna7/XVabZgnJpLkfGTICtuCUgKz5Jjfh6+tVut4Un0scxVJJsssz2uZMJPBu/GRIPmpI/ma52R9bJF6kYd+T5Yhjy26UuURqUYSCXMef8i5cePMqYYSCUnCKOhO1H/+/Hk4TErhUZEk+iwtLe3y049YqkeHNL0/5LlU5bFvHChSKLQqS76HQOxk4ZDCyqBvuCOSRKDl5eU9Tmy53BEKxmKgUDdEirBUA4zGnRKX6wpJqTrkZby1LT1gNsii60QCT+8v5sJS/gthJQZGoFfNOVev108JWWgwBnI+rwxtkAiMBc+rX+EICZALEAnkAkQCuQCRQC5AJJALEAnkAkQCuQCRQC5AJJALBSkLIABGJ5Ot5N0yktBW+IAAGI7r5mDX9UgXFxdSEoBaJPBUpAz3Xa8m6XqOtLq6eswhaoufZgTAA8gWpmazeaNN4Z1S29AV7YScn3gIRiOU2pZv//2dVZtYtrCwIJHpkAAIcHC5lLqj+yTq/veHXszRqWzoWAYwObJCofBuZWVl4D63R/e1hU2R0gA0IRAdPJT91Wq1th/b0v2knbaxdJMFN5GhbH19/dNTvnfYLdsY6uIgC9uNqk99wdBNJLCq8w1HocMfP36Uh+1OMnJbG0QndwwdhfoZqz8SopMPRo1C/eTSsU2iEy8Pd3F7xRxjRaF+cmv9h+4ldgjJxcNBycWR/k3KGeSddJPHMHYfk+xquxMm4wmBmSOJRf5SnlQP7on32YZQs2XSAvWYWud/CDVdpiVQj6kfIQGhJsu0Beoxs0NtpCJT2guyVK8JjEVvFcZPK7M6MWmmpyMJfWkDESoh8GQk+vB1O242m5VJHQ3xVGYuUj9h2JPa8bcE7kWiT7vdPhKBZnEK0iBUidQjRKmUHzsY+q6Hrq/0e+iqkkJUitRPT6rYIpXWyDMI9SLdpndcKd/bS/mPr8gJIer8T8Th3636UFmrRsyJ1E843iLlT65ELDnS9JWVG8f8c/7NP7PIIj2raxaizkOYFuk+Go2GHG+a9OTih4g1s8glkUakEVlEHH5kV1dX1VmvsvLGnUiDEMFYrlLfOboJ/ZdukDPnng8bzUSQ8DQLwogcWf9D6/HqeRONSMMQJvj30mq1Lr1FEwAAAAAAAAAA3vkXxhjJBy3Tr5UAAAAASUVORK5CYII=`;

