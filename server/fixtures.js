if (App.collections.bills.find().count() === 0) {
    _.each(_.range(200), function(iteration) {
        var future = faker.date.future();
        var recent = faker.date.recent();

        var data = {
            payed: faker.random.array_element([true, false, false, false]),
            title: iteration,
            date: faker.date.past(),
            payTill: faker.date.future(),
            payDate: faker.date.between(recent, future),
            price: faker.finance.amount(),
            items: faker.random.number(),
            contragent: {
                name: faker.company.companyName(),
                id: iteration + faker.helpers.randomNumber(),
                type: faker.random.array_element([1, 2, 3, 4, 5])
            }
        };

        App.collections.bills.insert(data);
    });
}