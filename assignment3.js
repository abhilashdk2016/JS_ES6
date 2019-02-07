const companies = [ 
    {
        name: "Company One", 
        category: "Finance", 
        start: 1981, 
        end: 2003
    }, 
    {
        name: "Company Two", 
        category: "Retail", 
        start: 1992, 
        end: 2008
    }, 
    {
        name: "Company Three", 
        category: "Auto", 
        start: 1999, 
        end: 2007
    }, 
    {
        name: "Company Four", 
        category: "Retail", 
        start: 1989, 
        end: 2010
    }, 
    {
        name: "Company Five", 
        category: "Technology", 
        start: 2009, 
        end: 2014
    }, 
    {
        name: "Company Six", 
        category: "Finance", 
        start: 1987, 
        end: 2010
    }, 
    {
        name: "Company Seven", 
        category: "Auto", 
        start: 1986, 
        end: 1996
    }, 
    {
        name: "Company Eight", 
        category: "Technology", 
        start: 2011, 
        end: 2016
    }, 
    {
        name: "Company Nine", 
        category: "Retail", 
        start: 1981, 
        end: 1989
    } 
];

let category = 'Technology';

let add = function(a,b) {
    return a + b;
}

let add2 = (a,b) => a + b;

// every()---> Check weather all companies belongs to the category "Technology" using every() function?(Use Arrow function) And also 
// check after changing all categories to "Technology".
console.log(companies.every(x => x.category === category)); // False
console.log(companies.every(x => x.category === category)); // True - After changing all category to Technology

// map()--->Create separate array using map() operator to store "name" ,"start" and "end" of companies 
// whose category belongs to "Technology" ? (Use Arrow function) ( All three should be a part of a single array)
console.log('map()------------------------------------------------------------------------------');
let subset = companies.filter(x => x.category === category)
                      .map(x =>  {
                        return {
                            name: x.name,
                            start: x.start,
                            end: x.end
                        };
                      });
console.log(subset);

// filter()--->Display company details which are started in between 1984-2010 and closed in between 2003-2016? (Use Arrow function)
console.log('filter()----------------------------------------------------------------------------');
let filter = companies.filter(c => (c.start >= 1984 && c.start <= 2010) && (c.end >= 2003 && c.end <= 2016) );
console.log(filter);

//sort()----> Display company details in ascending order from starting year using sort() method? (Use Arrow function)
console.log('sort()------------------------------------------------------------------------------');
let sorted = companies.sort((c,d) => c.start - d.start);
console.log(sorted);

// find()----->Display the details of company name "company One" using find() method? (Use Arrow function)
console.log('find()------------------------------------------------------------------------------');
let comp1 = companies.find(c => c.name === 'Company One');
console.log(comp1);

// findindex()---->Display the details of company name "company Six" using findindex() method? (Use Arrow function)
console.log('findIndex()---------------------------------------------------------------------------');
let comp6 = companies.findIndex(c => c.name === 'Company Six');
console.log(comp6);
console.log(companies[comp6]);