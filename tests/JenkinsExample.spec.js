import { test, expect } from '@playwright/test';

/**
 * Author Testers Talk
 */
test('Codegen test case', { tag: ['@PlaywrightWithJenkins'] }, async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByPlaceholder('Search').first().click();
  await page.getByPlaceholder('Search').first().fill('playwright by testers talk ');
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  await page.getByRole('link', { name: 'Playwright by Testers Talk☑️' }).click();
  await page.locator('video').click();
  await expect(page.getByRole('link', { name: 'Playwright by Testers Talk☑️' })).toBeVisible();
});

/**
 * Author Testers Talk
 */
test('Test 2 will fail', { tag: ['@PlaywrightWithJenkins'] }, async ({ page }) => {
  await page.goto('https://www.youtube.com/@testerstalk');
  expect(true).toBe(false);
});
// Import playwright module








test.use({
    baseURL: process.env.BASE_API_URL,
})

/**
 * Author Testers Talk
 */
test('[10,11] Create DELETE API Request using playwright & typescript', { tag: ['@PlaywrightWithJenkins', '@PlaywrightWithAzureDevOpsPipeline','@PlaywrightWithGitHubActions'] }, async ({ request }) => {

    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const totalPrice = faker.number.int({ min: 1000, max: 10000 });

    const postAPIRequest = await getPOSTAPIRequestBody(firstName, lastName, totalPrice,
        true, "breakfast", "2025-01-25", "2025-01-27");

    // Create POST API Request
    const postAPIResponse = await request.post(`/booking`, { data: postAPIRequest });

    // Print JSON API response
    const jsonPOSTAPIResponse = await postAPIResponse.json();
    console.log('POST API Response : ' + JSON.stringify(jsonPOSTAPIResponse, null, 2));

    // Validating api response
    expect(postAPIResponse.status()).toBe(200);
    expect(postAPIResponse.statusText()).toBe('OK');
    expect(postAPIResponse.headers()['content-type']).toContain('application/json');

    // Validate propert/key names
    expect(jsonPOSTAPIResponse.booking).toHaveProperty('firstname');
    expect(jsonPOSTAPIResponse.booking).toHaveProperty('lastname');

    expect(jsonPOSTAPIResponse.booking.bookingdates).toHaveProperty('checkin');
    expect(jsonPOSTAPIResponse.booking.bookingdates).toHaveProperty('checkout');

    // Validate API response body
    expect(jsonPOSTAPIResponse.bookingid).toBeGreaterThan(0);
    expect(jsonPOSTAPIResponse.booking.firstname).toBe(firstName);
    expect(jsonPOSTAPIResponse.booking.lastname).toBe(lastName);

    expect(jsonPOSTAPIResponse.booking.bookingdates.checkin).toBe('2025-01-25');
    expect(jsonPOSTAPIResponse.booking.bookingdates.checkout).toBe('2025-01-27');

    // Create GET API request
    const bookingId = jsonPOSTAPIResponse.bookingid;
    console.log('Booking Id : ' + bookingId);

    const getAPIResponse = await request.get(`/booking/${bookingId}`);

    // Validate status code, status text
    expect(getAPIResponse.status()).toBe(200);
    expect(getAPIResponse.statusText()).toBe('OK');

    // Print GET API response
    const getAPIJSONResponse = await getAPIResponse.json();
    console.log('GET API Response : ' + JSON.stringify(getAPIJSONResponse, null, 2));

    // Generate token
    const tokenAPIResponse = await request.post(`/auth`, { data: tokenAPIRequest });

    // Validate status code, status text
    expect(tokenAPIResponse.status()).toBe(200);
    expect(tokenAPIResponse.statusText()).toBe('OK');

    const tokenAPIJSONResponse = await tokenAPIResponse.json();
    const token = tokenAPIJSONResponse.token;
    console.log('Token : ' + token);

    // Create PATCH API Request
    const patchAPIResponse = await request.patch(`/booking/${bookingId}`, {
        headers: {
            "Content-Type": "application/json",
            "Cookie": `token=${token}`
        },
        data: patchAPIRequest,
    })

    // Validate status code, status text
    expect(patchAPIResponse.status()).toBe(200);
    expect(patchAPIResponse.statusText()).toBe('OK');

    // Print GET API response
    const patchAPIJSONResponse = await patchAPIResponse.json();
    console.log('PATCH API Response : ' + JSON.stringify(patchAPIJSONResponse, null, 2));


    // Create DELETE API Request
    const deleteAPIResponse = await request.delete(`/booking/${bookingId}`, {
        headers: {
            "Content-Type": "application/json",
            "Cookie": `token=${token}`
        },
    })

    // Validate status code, status text
    expect(deleteAPIResponse.status()).toBe(201);
    expect(deleteAPIResponse.statusText()).toBe('Created');

    console.log('DELETE API Response : ' + await deleteAPIResponse.body());
});