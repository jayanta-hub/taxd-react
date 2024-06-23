// export let surveyData = {
//   success: true,
//   data: {
//     data: {
//       dynamicCalculation: {
//         taxPosition: 0,
//         totalIncome: 0,
//         capitalIncome: 0,
//         allowableExpenses: 0,
//         taxPaid: 0,
//         taxLiability: 0,
//         studentLoanDue: 0,
//         NICDue: 0,
//         capitalGainsTax: 0,
//       },
//       categories: {
//         Introduction: {
//           questionFlow: [
//             {
//               question: {
//                 question_key: "intro-taxyearoptions",
//                 category: "Introduction",
//                 question: "Have any of these applied to you?",
//                 type: "Multiple Choice",
//                 sub_text:
//                   "These situations are likely to be rare. Consult the <em>help</em> icon to learn more.\n<p>You can select more than one answer.</p>",
//                 help_text:
//                   "<h3>Tax situations</h3>\n<h4>Had non-UK income</h4>\n<p>Foreign income can include:</p>\n<ul>\n<li>Wages if you work abroad</li>\n<li>Foreign investment income (for example, dividends and savings interest)</li>\n<li>Income from property owned overseas</li>\n<li>Income from pensions held overseas</li>\n</ul>\n<p>Note that gifts from immediate family are mostly considered non-taxable and reportable. Please make sure to check this with a specialist.</p>\n<h4>Resident of another country</h4>\n<p>If you are a resident of another country, you're likely asked to pay tax there as well. This causes additional work on the UK returns which we are still developing the technology for.</p>\n<p>If you're not sure if you're a resident overseas, please contact your local tax office to find out. Most commonly, if you spend more than <strong>183 days</strong> or more in a year in a certain place, you count as a resident. However, each country has its own legislation.</p>\n<h4>Partnership income</h4>\n<p>Partnership (LLPs) involve sharing profits between business partners. This income is taxed separately on the Self Assessment tax return.</p>\n<h4>Trust income</h4>\n<p>A trust is a way of managing assets (money, investments, land or buildings) for people. There are different types of trusts and they are taxed differently.</p>\n<h4>Overseas pension scheme</h4>\n<p>Contributions to an overseas pension scheme can incur additional charges, depending on the country and pension scheme.</p>\n<p>HMRC regularly updates a list of registered overseas pension schemes.</p>",
//                 submit: "intro-nondom",
//                 choices: [
//                   {
//                     key: "__income_overseas",
//                     name: "Income from overseas",
//                     icon: "currenciesother.svg",
//                   },
//                   {
//                     key: "__resident_other_country",
//                     name: "Resident of another country",
//                     icon: "americas.svg",
//                   },
//                   {
//                     key: "__trust_income",
//                     name: "Trust income",
//                     icon: "trust.svg",
//                   },
//                   {
//                     key: "__overseas_pension",
//                     name: "Overseas pension scheme",
//                     icon: "cloud-rain.svg",
//                   },
//                   {
//                     key: "__intro-taxyearoptions_skip",
//                     skip: true,
//                     name: "No",
//                   },
//                 ],
//                 required: true,
//               },
//               answer: [
//                 "__resident_other_country",
//                 "__income_overseas",
//                 "__trust_income",
//                 "__overseas_pension",
//               ],
//             },
//             {
//               question: {
//                 question_key: "intro-nondom",
//                 category: "Introduction",
//                 question: "Did you keep your foreign income overseas?",
//                 type: "Boolean",
//                 sub_text:
//                   "If you are a UK national then this is likely a 'No'. If you are looking to claim the remittance basis please select 'Yes'",
//                 help_text:
//                   "<h3>Remittance Basis</h3>\n<p>The remittance basis is an alternative tax treatment that’s available to individuals who are resident but not domiciled in the UK and have foreign income and gains. Remittance basis is not available if you are deemed domicile in the UK. You will be deemed domicile if you were born in the UK with UK domicile of origin and UK resident in 2022 to 2023 tax year, or you have been UK resident for at least 15 of the previous 20 tax years and UK resident in 2022 to 2023 tax year.</p>",
//                 submit: "intro-jobstatus",
//                 display_rulesets: [
//                   {
//                     if_display_false: "intro-jobstatus",
//                     rules: [
//                       {
//                         question_key: "intro-taxyearoptions",
//                         operator: "contains",
//                         value: "__income_overseas",
//                       },
//                       {
//                         question_key: "intro-taxyearoptions",
//                         operator: "contains",
//                         value: "__overseas_pension",
//                       },
//                     ],
//                     type: "or",
//                   },
//                 ],
//                 required: true,
//               },
//               answer: false,
//             },
//             {
//               question: {
//                 question_key: "intro-jobstatus",
//                 category: "Introduction",
//                 question: "Your job status in 2023/2024",
//                 type: "Multiple Choice",
//                 sub_text:
//                   "<p>You can select more than one.</p><br /><strong>If you're not a UK tax resident, please only select UK sources of income. You can come back and change this during your main tax return too.</strong>",
//                 help_text:
//                   "<h3>Job Status</h3>\n<p>Your job status determines which parts of the tax return will need to be completed.</p>\n<p>Select <strong>employed </strong>if you</p>\n<ul>\n<li>work for an employer who deducts tax through PAYE</li>\n<li>received income as a company director</li>\n<li>hold an office such as a chairperson, secretary or treasurer and received an income for that work</li>\n<li>work for one person through another company or partnership</li>\n</ul>\n<p>If you were the <strong>director of a ltd company,</strong> this is technically the same as employment.</p>\n<p>Select <strong>self-employed</strong> if you're working for yourself as a freelance or the owner of a business rather than for an employer.</p>\n<p>Select <strong>landlord</strong> if you have rental properties held in your personal name.</p>\n<p>If neither of the above options apply to you, select <strong>No employment</strong>.</p>",
//                 submit: "intro-income",
//                 choices: [
//                   {
//                     key: "__employed",
//                     name: "Employed",
//                     icon: "users.svg",
//                   },
//                   {
//                     key: "__self_employed",
//                     name: "Self-employed",
//                     icon: "user.svg",
//                   },
//                   {
//                     key: "__partnership",
//                     name: "Partnership",
//                     icon: "partnership.svg",
//                   },
//                   {
//                     key: "__director",
//                     name: "Director of Ltd Company",
//                     icon: "director.svg",
//                   },
//                   {
//                     key: "__landlord",
//                     name: "Landlord",
//                     icon: "landlord.svg",
//                   },
//                   {
//                     key: "__intro-jobstatus_skip",
//                     skip: true,
//                     name: "No employment",
//                   },
//                 ],
//                 required: true,
//               },
//               answer: [
//                 "__employed",
//                 "__self_employed",
//                 "__partnership",
//                 "__director",
//                 "__landlord",
//               ],
//             },
//             {
//               question: {
//                 question_key: "intro-income",
//                 category: "Introduction",
//                 question: "Additional sources of income",
//                 type: "Multiple Choice",
//                 sub_text: "Include all that apply to you.",
//                 help_text:
//                   "<h3>Additional income</h3><br/><h4>Interest</h4>\n<p>Interest includes the returns on a savings account you may hold with a bank or building society.</p>\n<p>You may receive a tax statement from your bank or building society.</p>\n<h4>Dividends</h4>\n<p>A dividend is the share of a company's profits that is distributed to shareholders.</p>\n<p>You may receive a tax statement from your brokerage, but this can also be provided by funds. Funds collate the dividends from the companies they hold and then make payments to you once a year, twice a year, or quarterly.</p>\n<h4>Rental income</h4>\n<p>If you're a landlord, you may receive rental income for your UK properties. This might be related to residential lettings including renting out part of your own home or furnished holiday lettings.</p>\n<p>It makes everything easier if you've been keeping track of your turnover and expenses throughout the year!</p>\n<h4>Pension or state benefits</h4>\n<p>State benefits include allowances that the government may provide.</p>\n<p>There are several tax free benefits so we'll be asking you questions about this later, if this section applies to you.</p><h3>Crypto Activities</h3><h4>Mining</h4><ul><li>Taxable as trading or miscellaneous income depending on the activity's commercial nature.</li><li>Eligible for the £1,000 trading allowance, potentially exempting low amounts from reporting.</li></ul><h4>Staking</h4><ul><li>Rewards taxable as trading or miscellaneous income, similar to interest earnings.</li><li>In certain situations, may be treated as capital receipts.</li><li>Transferred ownership during staking considered a disposal for capital gains tax by HMRC.</li></ul><h4>Airdrops</h4><ul><li>Taxable if received in exchange for services.</li><li>The reason for receipt affects tax treatment.</li></ul>",
//                 submit: "intro-assets",
//                 choices: [
//                   {
//                     key: "__interest",
//                     name: "Interest",
//                     icon: "interest.svg",
//                   },
//                   {
//                     key: "__dividends",
//                     name: "Dividends",
//                     icon: "dividends.svg",
//                   },
//                   {
//                     key: "__rental_income",
//                     name: "Rental income",
//                     icon: "propertyincome.svg",
//                   },
//                   {
//                     key: "__pensions",
//                     name: "Pension",
//                     icon: "cloud-rain.svg",
//                   },
//                   {
//                     key: "__benefits",
//                     name: "State benefits",
//                     icon: "cloud-rain.svg",
//                   },
//                   {
//                     key: "__crypto_activities",
//                     name: "Crypto activities",
//                     icon: "cryptocurrency.svg",
//                   },
//                   {
//                     key: "__intro-income_skip",
//                     skip: true,
//                     name: "None",
//                   },
//                 ],
//                 required: true,
//               },
//               answer: [
//                 "__interest",
//                 "__dividends",
//                 "__rental_income",
//                 "__pensions",
//                 "__benefits",
//                 "__crypto_activities",
//               ],
//             },
//             {
//               question: {
//                 question_key: "intro-assets",
//                 category: "Introduction",
//                 question: "Have you sold any assets?",
//                 type: "Multiple Choice",
//                 sub_text: "Select the asset that you sold below.",
//                 help_text:
//                   '<h3>Capital gains</h3>\n<p><a rel="noopener" href="https://www.taxd.co.uk/post/capital-gains-101" target="_blank">Capital Gains Tax</a> is a tax on the profit when you sell (or dispose of) something (an asset) that\'s increased in value. It\'s the gain you make that\'s taxed, not the total amount of money you receive.</p>\n<p>In the UK, each resident is entitled up to <strong>£12,300</strong> of gains tax free for the year. If your gain was above this, you\'ll need to report this during your Self Assessment.</p>\n<p>If your gain was less than £12,300. feel free to skip this question or select n<strong>o sales</strong>.</p>\n<p>If you made a loss, you still have the option to select the relevant option. Our software remembers this and can offset against gains you might make in the future.</p>\n<p>Disposal of an asset includes:</p>\n<ul>\n<li>Selling it</li>\n<li>Giving it away as a gift or transferring it to someone else</li>\n<li>Swapping it for something else</li>\n<li>Getting compensation for it (like an insurance pay-out if the asset was lost or destroyed)</li>\n</ul>',
//                 choices: [
//                   {
//                     key: "__property_land",
//                     name: "Property and land",
//                     icon: "propertyandland.svg",
//                   },
//                   {
//                     key: "__unlisted_shares",
//                     name: "Unlisted Shares",
//                     icon: "shares.svg",
//                   },
//                   {
//                     key: "__listed_shares",
//                     name: "Listed Shares",
//                     icon: "shares.svg",
//                   },
//                   {
//                     key: "__crypto",
//                     name: "Cryptocurrency",
//                     icon: "cryptocurrency.svg",
//                   },
//                   {
//                     key: "__personalbusiness",
//                     name: "Business asset",
//                     icon: "contract.svg",
//                   },
//                   {
//                     key: "__other",
//                     name: "Other assets",
//                     icon: "contract.svg",
//                   },
//                   {
//                     key: "__emi",
//                     name: "EMI/BADR",
//                     icon: "contract.svg",
//                   },
//                   {
//                     key: "__intro-assets_skip",
//                     skip: true,
//                     name: "No",
//                   },
//                 ],
//                 required: true,
//               },
//               answer: [
//                 "__property_land",
//                 "__unlisted_shares",
//                 "__listed_shares",
//                 "__crypto",
//                 "__personalbusiness",
//                 "__emi",
//                 "__other",
//               ],
//             },
//           ],
//           status: "Complete",
//           categoryExtras: {
//             name: "Introduction",
//             start: "intro-taxyear",
//           },
//           summary: {
//             title: "Introduction",
//             subtext:
//               "The introduction questions helped us select questions for you to answer and submit a thorough tax return. Here's what you told us:",
//             data: [
//               {
//                 value:
//                   "You were <strong>Employed, Self-employed, Partnership, a Director of Ltd Company and a Landlord</strong>.",
//               },
//               {
//                 value:
//                   "You received <strong>interest, dividends, rental income, pension, state benefits and crypto activities</strong>.",
//               },
//               {
//                 value:
//                   "You sold <strong>property and land, unlisted shares, listed shares, cryptocurrency, business asset, other assets and emi/badr</strong>.",
//               },
//             ],
//           },
//           progressBarLength: 9,
//           progressBarIndex: 9,
//         },
//         Residence: {
//           questionFlow: [
//             {
//               question: {
//                 question_key: "residence-nonres_tests",
//                 category: "Residence",
//                 question: "Automatic non-resident tests",
//                 type: "Multi Toggle",
//                 sub_text:
//                   "We’re going to ask you questions to help determine your tax residence.",
//                 submit: "residence-res_tests",
//                 if_true: "residence-days_multi",
//                 sub_questions: [
//                   "residence-nonres_46",
//                   "residence-nonres_16",
//                   "residence-nonres_fto",
//                 ],
//                 required: true,
//                 help_text: null,
//                 questionObjects: [
//                   {
//                     question: {
//                       question_key: "residence-nonres_46",
//                       category: "Residence",
//                       question:
//                         "You were a <strong>non-UK resident throughout the whole of the previous three tax years</strong> and present in UK for <strong>less than</strong> 46 days in the 2023/2024 tax year.",
//                       type: "Toggle",
//                       parent_question: "residence-nonres_tests",
//                       required: true,
//                       sub_text: null,
//                       help_text: null,
//                     },
//                     answer: null,
//                   },
//                   {
//                     question: {
//                       question_key: "residence-nonres_16",
//                       category: "Residence",
//                       question:
//                         "You were a <strong>resident in UK in at least one of the previous three tax years</strong> and present in UK <strong>less than</strong> 16 days in the 2023/2024 tax year.",
//                       type: "Toggle",
//                       parent_question: "residence-nonres_tests",
//                       required: true,
//                       sub_text: null,
//                       help_text: null,
//                     },
//                     answer: null,
//                   },
//                   {
//                     question: {
//                       question_key: "residence-nonres_fto",
//                       category: "Residence",
//                       question:
//                         "You are working full time overseas and were present in UK for <strong>less than</strong> 91 days and spent <strong>less than</strong> 31 days working in UK.",
//                       type: "Toggle",
//                       help_text:
//                         "<h3>Automatic Non Residence Test - Overseas Work</h3><p>To be a non-UK resident for the tax year while working full-time overseas, consider these conditions:</p><ol><li><p>Spend fewer than 91 days in the UK in the tax year.</p></li><li><p>Work for more than 3 hours in the UK on less than 31 days.</p></li><li><p>Avoid significant breaks in your overseas work.</p></li></ol><p>A significant break means at least 31 days pass, and none of those days involve:</p><ul><li>Working for more than 3 hours overseas</li><li>Would-be overseas work (more than 3 hours) but did not happen due to leave (annual, sick, or parenting)</li></ul><p>Important to note:</p><ul><li>A significant break disqualifies you from full-time work overseas.</li><li>This test applies to both employees and the self-employed.</li><li>It does not apply to voluntary workers or those with jobs on vehicles, aircraft, or ships.</li></ul>",
//                       parent_question: "residence-nonres_tests",
//                       required: true,
//                       sub_text: null,
//                     },
//                     answer: null,
//                   },
//                 ],
//               },
//               answer: {},
//             },
//           ],
//           status: "Not Started",
//           categoryExtras: {
//             name: "Residence",
//             start: "residence-nonres_tests",
//           },
//           intro:
//             "<p>If you live abroad or call another country home, don't worry, we've got you covered in the Residence category. We'll ask you about:</p>\n        <ul>\n            <li>days in the UK</li>\n            <li>workdays in the UK</li>\n            <li>other countries you've lived in</li>\n            <li>your nationalities</li>\n            <li>and your ties to the UK.</li>\n        </ul>\n        <p>A couple of important things to keep in mind:</p>\n        <ol>\n            <li>If you stayed outside the UK all year or are considered a non-resident, you only need to report your UK income.</li>\n            <li>If you're a UK resident but not originally from here, you might be eligible for the 'Remittance Basis.'</li>\n        </ol>\n        <p>Just ask us in the help chat if you're unsure about anything. We're here to assist you!</p>",
//           progressBarLength: 32,
//           progressBarIndex: 0,
//         },
//         Employment: {
//           questionFlow: [
//             {
//               question: {
//                 question_key: "employer-addnew",
//                 category: "Employment",
//                 question: "Select 'Add New' to add an employment below",
//                 type: "Array",
//                 sub_text:
//                   "You can edit any existing employments here or select 'add new' to create a new employment.",
//                 child_category: "Employer",
//                 required: true,
//                 help_text: null,
//               },
//               answer: [],
//             },
//           ],
//           status: "Not Started",
//           categoryExtras: {
//             name: "Employment",
//             start: "employer-addnew",
//           },
//           intro:
//             '<div style="margin-bottom: 24px">\n                <p>\n                    You selected that you were employed during the tax year. During this part of the questionnaire\n                    you will give us the necessary details to complete the required Self Assessment fields.\n                </p>\n            </div>\n            <div style="margin-bottom: 24px">\n                <p>\n                    We can automatically pull data from HMRC around your employment earnings, benefits and taxes\n                    paid. Click the Cloud icon at the top right to connect your account.\n                </p>\n                <br />\n                <p style="font-weight: 500">You will need your HMRC Government Gateway ID and Password.</p>\n            </div>\n            <div style="margin-bottom: 24px">\n                <h3>How can I maximise my tax efficiency here?</h3>\n                <br />\n                <br />\n                <p>\n                    If you spent any work days at a different location or office to your main office, then you may\n                    be able to file temporary workplace expenses.\n                </p>\n                <br />\n                <p>\n                    And if you didn\'t receive all the personal allowance you were entitled to, we will ensure this\n                    is allocated to you.\n                </p>\n            </div>\n            <div style="margin-bottom: 24px">\n                <h3>Make sure to have these handy...</h3>\n                <br />\n                <br />\n                <ul>\n                    <li>\n                        <span className="semibold">P60, P45, or P11D documents</span>\n                    </li>\n                    <li>\n                        <span className="semibold">Details of your expenses</span> (For the year)\n                    </li>\n                </ul>\n            </div>',
//           progressBarLength: 1,
//           progressBarIndex: 0,
//         },
//         "Self Employed": {
//           questionFlow: [
//             {
//               question: {
//                 question_key: "self-addnew",
//                 category: "Self Employed",
//                 question: "Select 'add new' to add a self-employment below",
//                 type: "Array",
//                 child_category: "Self Employed Business",
//                 required: true,
//                 sub_text: null,
//                 help_text: null,
//               },
//               answer: [],
//             },
//           ],
//           status: "Not Started",
//           categoryExtras: {
//             name: "Self Employed",
//             start: "self-addnew",
//           },
//           intro:
//             "<p>So you&apos;re self-employed, you are your own boss!</p>\n            <br />\n            <h3>How can I maximise my tax efficiency here?</h3>\n            <br />\n            <br />\n            <p>\n                We&apos;ll ensure you are tax efficient, by asking you about expenses that are common in your\n                industry.You likely use a car, phone or home for work purposes. We&apos;ll ask you about this and pick\n                the most tax efficient route for you.\n            </p>\n            <br />\n            <h3>Make sure to have these handy...</h3>\n            <br />\n            <br />\n            <ul>\n                <li>Earnings</li>\n                <li>Details of travel (mileage or car costs)</li>\n                <li>Expenses, we&apos;ll ask you about your industry so that we suggest ones specific to your role!</li>\n            </ul>\n            <br />\n\n            <p>If you track your earnings on a spreadsheet or app, keep this to hand.</p>\n            <p>\n                Feel free to get in touch with the Taxd team if you have any questions about what you can, or cannot\n                expense!\n            </p>",
//           progressBarLength: 1,
//           progressBarIndex: 0,
//         },
//         Partnership: {
//           questionFlow: [
//             {
//               question: {
//                 question_key: "partnership-addnew",
//                 category: "Partnership",
//                 question: "Select 'Add New' to add a Partnership below",
//                 type: "Array",
//                 child_category: "Partnership Business",
//                 required: true,
//                 sub_text: null,
//                 help_text: null,
//               },
//               answer: [],
//             },
//           ],
//           status: "Not Started",
//           categoryExtras: {
//             name: "Partnership",
//             start: "partnership-addnew",
//           },
//           intro:
//             "<p>\n                Awesome! It's great to hear that you were a partner in a partnership during the tax year. In this section of the questionnaire, we'll be asking you for the necessary details to complete the required Self Assessment fields.\n            </p>\n            <br />\n            <br />\n            <p>\n                To help us with this, we'll need to gather some information about your partnership business, so be prepared to answer a few questions. It's always a good idea to have a copy of the Partnership Tax Return that includes a summary of your earnings on the Partnership Statement, as this can make things easier for you.\n            </p>\n            <br />\n            <br />\n            <p>\n                And don't worry if you're unsure about anything - we're here to guide you through the process and make sure that your tax return is completed accurately and efficiently.\n            </p>",
//           progressBarLength: 1,
//           progressBarIndex: 0,
//         },
//         "Credits and Deductions": {
//           questionFlow: [
//             {
//               question: {
//                 question_key: "credit-intro",
//                 category: "Credits and Deductions",
//                 question: "Which of the following apply to you?",
//                 type: "Multiple Choice",
//                 sub_text:
//                   "Consult the <strong>help icon</strong> for more information.",
//                 help_text:
//                   "<h3>Private pension contributions</h3>\n<p>If you have a pension outside of your employment, these contributions may be subject to additional tax saving. This is achieved by extending your basic rate band. Essentially, if you pay tax at 40% or 45%, you will get 20% and 25% as a refund respectively. In most instances, a 20% relief is given at the time of payment when the pension provider \"grosses up\" the contribution you make by 25%.</p>\n<p>If this is applicable to you, please select the appropriate options so we can get the details and ensure you get the correct treatment.</p>\n<h4>Charitable giving</h4>\n<p>Similar to the above, charitable contributions are treated in the same way. If you gave to charity throughout the year, please select the option and we will make sure you get the full tax benefits.</p>\n<p>Note that donations would need to have been made in the following ways:</p>\n<ul>\n<li>Through Gift Aid</li>\n<li>Through a Payroll Giving scheme (straight from your wages or pension)</li>\n<li>Land, property or shares</li>\n</ul>\n<h4>Blind Person Allowance</h4>\n<p>The Blind Person's Allowance of <strong>£2,500</strong> in 2020/21 can be added to your yearly Personal Allowance. The Personal Allowance is the amount of money you can earn before you start paying Income Tax.</p>\n<p>To be eligible to claim, you must be located in England or Wales and:</p>\n<ul>\n<li>Be registered with your local council as blind or severely sight impaired</li>\n<li>Have a certificate that says you're blind or severely sight impaired, (or a similar document from your doctor)</li>\n</ul>\n<p>If you're in Scotland or Northern Ireland, you must:</p>\n<ul>\n<li>Be unable to carry out work in which eyesight is essential</li>\n<li>Have a certificate that says you're blind or severely sight impaired, (or a similar document from your doctor)</li>\n</ul>\n<h4>Marriage Allowance</h4>\n<p>Married couples can elect to transfer <strong>£1,260</strong> of their Personal Allowance to their spouse if they don't use it themselves. This would result in a tax saving of £252.</p>\n<p>To get this saving, the following conditions need to apply:</p>\n<ul>\n<li>You're married or in a civil partnership</li>\n<li>You don't pay Income Tax or your income is below your Personal Allowance (£12,000 for 2023/2024)</li>\n<li>Your partner pays Income Tax at the basic rate (an income between £12,501 and £50,000 for 2023/2024)</li>\n</ul>\n<p>You cannot claim Marriage Allowance if you're living together and you're not married or in a civil partnership.</p>\n<h4>Unique Occupational Scheme not deducted before tax</h4>\n<p>For almost all employees who make pension contributions to an occupational pension scheme, (a pension through their work), the contribution is taken off their salary before they pay tax. Essentially, the tax benefit is received at the source.</p>\n<p>In some rare occasions, despite an employee making contributions, their salary may be taxed from the gross amount - this is the figure they are paid before tax and pension payments.</p>",
//                 choices: [
//                   {
//                     key: "__pension_payments_ooe",
//                     name: "Private pension (SIPP)",
//                     submit: "pension-addanother",
//                   },
//                   {
//                     key: "__charitable_giving",
//                     name: "Charitable Giving",
//                     submit: "gifts-add",
//                   },
//                   {
//                     key: "__blind_personal_allowance",
//                     name: "Blind Person Allowance",
//                     submit: "blind-registered_multi",
//                   },
//                   {
//                     key: "__marriage_allowance",
//                     name: "Marriage allowance",
//                     submit: "marriage-transfer",
//                   },
//                   {
//                     key: "__employer_pension_scheme",
//                     name: "Unique Occupational Scheme",
//                     submit: "pension-employer_multi",
//                   },
//                   {
//                     key: "__venture_capital_scheme",
//                     name: "Venture Capital Schemes",
//                     submit: "venture-row",
//                   },
//                   {
//                     key: "__overseas_pension_payments",
//                     name: "Overseas pension contributions",
//                     submit: "credits-overseas",
//                   },
//                   {
//                     key: "__credit-intro_skip",
//                     skip: true,
//                     name: "None",
//                   },
//                 ],
//                 required: true,
//               },
//               answer: [],
//             },
//           ],
//           status: "Not Started",
//           categoryExtras: {
//             name: "Credits and Deductions",
//             start: "credit-intro",
//           },
//           intro:
//             "<p>\n                At Taxd, our goal is to help you save on your tax bill throughout the entire process. We do this by showing you different deductions available to you, so you can make the most out of your income.\n            </p>\n            <br />\n            <p>\n                In this section, we have compiled a list of various credits and deductions that don't directly relate to a specific source of income. These can help you to reduce your bill, and even if you don't use them this year, they're worth keeping in mind for the future. So, let's take a look and see how we can maximize your tax savings! You may need details around:\n            </p>\n            <br />\n            <h3>If applicable, you may need details around:</h3>\n            <br />\n            <br />\n            <ul>\n                <li>Pension contributions</li>\n                <li>Charitable contributions</li>\n                <li>Marriage or blind allowance details</li>\n                <li>Venture capital schemes</li>\n            </ul>\n            <br />\n            <p>Shall we get started?</p>",
//           progressBarLength: 10,
//           progressBarIndex: 0,
//         },
//         Investment: {
//           questionFlow: [
//             {
//               question: {
//                 question_key: "interest-addbrokerage",
//                 category: "Investment",
//                 question: "Create an interest entry",
//                 type: "Row",
//                 sub_text:
//                   "If you had more than one bank/brokerage interest, you can add another. Remember that interest received within an ISA is not taxable.",
//                 submit: "dividend-foreign",
//                 sub_questions: [
//                   "interest-brokerage",
//                   "interest-joint",
//                   "interest-jointpercentage",
//                   "interest-gross",
//                   "interest-taxpaid",
//                 ],
//                 row_title_question: "interest-brokerage",
//                 display_rulesets: [
//                   {
//                     if_display_false: "dividend-foreign",
//                     rules: [
//                       {
//                         question_key: "Introduction.intro-income",
//                         operator: "contains",
//                         value: "__interest",
//                       },
//                     ],
//                     type: "and",
//                   },
//                 ],
//                 required: true,
//                 help_text: null,
//                 questionObjects: [
//                   {
//                     question: {
//                       question_key: "interest-brokerage",
//                       category: "Investment",
//                       question: "Name of the bank or brokerage",
//                       type: "Free text",
//                       sub_text:
//                         "This is likely to be the bank or brokerage you received your interest from.",
//                       help_text:
//                         "<h3>Savings Account</h3>\n \n <p>A savings account is an interest-bearing deposit account held at a bank or other financial institution. It could also be bonds or gilts. This is likely to be the bank or brokerage you received your interest from.</p>",
//                       parent_question: "interest-addbrokerage",
//                       row_data_label: "Brokerage",
//                       required: true,
//                     },
//                     answer: null,
//                   },
//                   {
//                     question: {
//                       question_key: "interest-joint",
//                       category: "Investment",
//                       question: "Was this account jointly owned?",
//                       type: "Boolean",
//                       help_text:
//                         "<h3> \n Joint savings account \n </h3> \n <p> \n Having a joint savings account is the same as having one on your own, except two people have control over the account, and can pay in and withdraw funds from the account. \n </p>",
//                       parent_question: "interest-addbrokerage",
//                       row_data_label: "Joint account",
//                       required: true,
//                       sub_text: null,
//                     },
//                     answer: null,
//                   },
//                   {
//                     question: {
//                       question_key: "interest-jointpercentage",
//                       category: "Investment",
//                       question: "Joint ownership percentage",
//                       type: "Numeric",
//                       unit: "%",
//                       parent_question: "interest-addbrokerage",
//                       row_data_label: "Ownership",
//                       display_rulesets: [
//                         {
//                           rules: [
//                             {
//                               question_key: "interest-joint",
//                               operator: "is",
//                               value: true,
//                             },
//                           ],
//                           type: "and",
//                         },
//                       ],
//                       validation: {
//                         min: "0",
//                         max: 100,
//                         title: "Please enter a value between 0 and 100.",
//                       },
//                       required: true,
//                       sub_text: null,
//                       help_text: null,
//                     },
//                     answer: null,
//                   },
//                   {
//                     question: {
//                       question_key: "interest-gross",
//                       category: "Investment",
//                       question: "Gross interest",
//                       type: "Numeric",
//                       unit: "£",
//                       sub_text:
//                         "If this was a joint account, please enter the full figure.",
//                       parent_question: "interest-addbrokerage",
//                       row_data_label: "Gross amount",
//                       required: true,
//                       help_text: null,
//                     },
//                     answer: null,
//                   },
//                   {
//                     question: {
//                       question_key: "interest-taxpaid",
//                       category: "Investment",
//                       question: "Has tax been deducted?",
//                       type: "Boolean",
//                       parent_question: "interest-addbrokerage",
//                       row_data_label: "Tax paid",
//                       required: true,
//                       sub_text: null,
//                       help_text: null,
//                     },
//                     answer: null,
//                   },
//                 ],
//               },
//               answer: [],
//             },
//           ],
//           status: "Not Started",
//           categoryExtras: {
//             name: "Investment",
//             start: "interest-foreign",
//           },
//           intro:
//             "<p>\n                Let's take a look at dividends and interest, both being taxable sources of income in the UK. Unless\n                wrapped in an ISA, or if under the allowance.\n            </p>\n            <br />\n            <h3>How can I maximise my tax efficiency here?</h3>\n            <br />\n            <br />\n            <ul>\n                <li>Make use of your interest and dividend allowance.</li>\n                <li>Leverage tax-efficient ISAs - there is no tax to pay on interest or dividends within an ISA.</li>\n            </ul>\n            <br />\n            <h3>Make sure to have these handy...</h3>\n            <br />\n            <br />\n            <ul>\n                <li>Investment statements</li>\n                <li>Saving statements</li>\n                <li>Your bank or brokerage will have the required statements.</li>\n            </ul>",
//           progressBarLength: 7,
//           progressBarIndex: 1,
//         },
//         Rental: {
//           questionFlow: [
//             {
//               question: {
//                 question_key: "rental-addproperty",
//                 category: "Rental",
//                 question: "Click 'Add New' to add a property",
//                 type: "Array",
//                 sub_text:
//                   "Once you've added all your properties, click next to complete the section.",
//                 help_text:
//                   "<h3>Property income</h3>\n<h4>Rent-a-Room</h4>\n<p>Everyone in the UK can rent out part of their own home and get tax relief known as Rent-a-Room relief. This relief allows an individual to earn up to <strong>£7,500</strong> per year tax free from any lodgers that may be renting a room in their home. Any income over this amount will be subject to tax at the normal income tax rates.</p>\n<p>If you are a joint owner of the home, this <strong>£7,500</strong> is reduced to your earning %. For example, if you and your partner own the home equally, the total is is reduced to <strong>£3,750</strong> per individual tax return.</p>\n<p>If your earnings are over £7,500 then you have 2 options:</p>\n<ul>\n<li>Option 1: You pay income tax on the amount it goes over the £7,500.</li>\n<li>Option 2: If you have expenses of over £7,500, you can elect to not use Rent-a-Room relief and calculate your taxable amount by the calculation: <em>income - expenses = taxable profit</em>.</li>\n</ul>\n<h4>UK rental property</h4>\n<p>This is the most common type of landlord and relates to normal residential dwellings.</p>\n<p>You'll have to pay <strong>Class 2 National Insurance</strong> if your profits are <strong>£6,515</strong> a year or more and if what you do counts as running a business, for example if all the following apply:</p>\n<ul>\n<li>Being a landlord is your main job</li>\n<li>You rent out more than one property</li>\n<li>You are buying new properties to rent out</li>\n</ul>\n<p>The first <strong>£1,000</strong> of your income from property rental is tax-free. This is your property allowance.</p>\n<p>You must report it on a Self Assessment tax return if it is:</p>\n<ul>\n<li><strong>£2,500</strong> to <strong>£9,999</strong> after allowable expenses</li>\n<li><strong>£10,000</strong> or more before allowable expenses</li>\n</ul>\n<p>You or your company must pay tax on the profit you make from renting out the property after the deductions. Allowable expenses are things you need to spend money on in the day-to-day running of the property. These can include:</p>\n<ul>\n<li>Letting agent fees</li>\n<li>Legal fees for lets of a year or less, or for renewing a lease for less than 50 years</li>\n<li>Accountant fees</li>\n<li>Buildings and contents insurance</li>\n<li>Maintenance and repairs to the property, (but not improvements)</li>\n<li>Utility bills like gas, water and electricity</li>\n<li>Rent, ground rent, service charges</li>\n<li>Council Tax</li>\n<li>Services you pay for, like cleaning or gardening</li>\n<li>Other direct costs of letting the property, like phone calls, stationery and advertising</li>\n</ul>\n<p>We'll run through these in later questions and help you determine your net profit/loss to be reported on the tax return.</p>\n<h4>Furnished Holiday Letting</h4>\n<p>There are special tax rules for rental income from properties that qualify as furnished holiday lettings (FHLs).</p>\n<p>To qualify as a FHL your property must:</p>\n<ul>\n<li>Be in the UK or in the European Economic Area (EEA). The EEA includes Iceland, Liechtenstein and Norway</li>\n<li>Be furnished. There must be sufficient furniture provided for normal occupation and your visitors must be entitled to use this furniture</li>\n<li>Satisfy the occupation conditions. For example, available for let or short-term lets to the public.</li>\n</ul>\n<p>The property must be commercially let, meaning that you must intend to make a profit. If you let the property out of season to cover costs but didn't make a profit, the letting will still be treated as commercial.</p>\n<p>All your FHLs in the UK are taxed as a single UK FHL business and all FHLs in other EEA states are taxed as a single EEA FHL business. You will need to keep separate records for each FHL business because the losses from one FHL business can't be used against profits of the other.</p>\n<p>Due to COVID-19, there are certain reliefs and claims that can be made to qualify for FHL even if the occupancy conditions were not met.</p>\n<p>Get in touch through the <em>Support Chat</em> if you have any questions.</p>",
//                 submit: "foreign-property_multi",
//                 child_category: "Rental Property",
//                 required: true,
//               },
//               answer: [],
//             },
//           ],
//           status: "Not Started",
//           categoryExtras: {
//             name: "Rental",
//             start: "rental-addproperty",
//           },
//           intro:
//             "<p>Taxd has you covered whether you are renting out:</p>\n            <br />\n            <ul>\n                <li>a room in your own home</li>\n                <li>residential properties</li>\n                <li>furnished holiday lets (FHLs)</li>\n            </ul>\n            <br />\n            <h3>What will we ask you?</h3>\n            <br />\n            <br />\n            <ul>\n                <li>Earnings and expenses related to your property.</li>\n                <li>Check out all the expenses, as you may be able to expense more than you think.</li>\n            </ul>\n            <br />\n            <p>As always, get in touch through the chat if you have any questions.</p>",
//           progressBarLength: 6,
//           progressBarIndex: 0,
//         },
//         Trusts: {
//           questionFlow: [
//             {
//               question: {
//                 question_key: "trusts-discretionary_income_multi",
//                 category: "Trusts",
//                 question: "Did you receive any discretionary income?",
//                 type: "Boolean Multi",
//                 submit: "trusts-non_discretionary_income_multi",
//                 sub_questions: [
//                   {
//                     boolean_key: "trusts-discretionary_income",
//                     show_on: true,
//                     questions: [
//                       "trusts-discretionary_net",
//                       "trusts-discretionary_settlor",
//                     ],
//                   },
//                 ],
//                 required: true,
//                 sub_text: null,
//                 help_text: null,
//                 questionObjects: [
//                   {
//                     booleanQuestion: {
//                       question: {
//                         question_key: "trusts-discretionary_income",
//                         category: "Trusts",
//                         type: "Boolean",
//                         parent_question: "trusts-discretionary_income_multi",
//                         question: null,
//                         sub_text: null,
//                         help_text: null,
//                       },
//                       answer: null,
//                     },
//                     showOn: true,
//                     questionObjects: [
//                       {
//                         question: {
//                           question_key: "trusts-discretionary_net",
//                           category: "Trusts",
//                           question: "Net amount",
//                           type: "Numeric",
//                           unit: "£",
//                           parent_question: "trusts-discretionary_income_multi",
//                           required: true,
//                           sub_text: null,
//                           help_text: null,
//                         },
//                         answer: null,
//                       },
//                       {
//                         question: {
//                           question_key: "trusts-discretionary_settlor",
//                           category: "Trusts",
//                           question:
//                             "Total payments from settlor-interested trusts",
//                           type: "Numeric",
//                           unit: "£",
//                           parent_question: "trusts-discretionary_income_multi",
//                           sub_text: null,
//                           help_text: null,
//                         },
//                         answer: null,
//                       },
//                     ],
//                   },
//                 ],
//               },
//               answer: {},
//             },
//           ],
//           status: "Not Started",
//           categoryExtras: {
//             name: "Trusts",
//             start: "trusts-discretionary_income_multi",
//           },
//           intro:
//             "<p>So you had received income from a trust or settlement. We'll guide you through the process of completing the Trust pages of the Self Assessment.</p>\n            <br />\n            <p>\n                Just remember, if you received income from a bare trust, it should be included on the relevant supplementary page that corresponds with the type of income. For example, if it's property income, you should report it on the UK Property page (SA105).\n            </p>\n            <br />\n            <p>\n                To make filling out these pages easier, be sure to refer to the R185 form that your trustee or personal representative gave you.\n            </p>",
//           progressBarLength: 9,
//           progressBarIndex: 0,
//         },
//         "Capital Gains": {
//           questionFlow: [
//             {
//               question: {
//                 question_key: "cgt-rtt",
//                 category: "Capital Gains",
//                 question:
//                   "Did you complete a real time transaction (RTT) tax return for any of your sales?",
//                 type: "Boolean",
//                 sub_text:
//                   "<i>Certain asset sales require a RTT to be completed. We will include reference to this in your tax return.</i>",
//                 if_true: "cgt-rttmultiq",
//                 if_false: "cgt-sharesintro",
//                 required: true,
//                 help_text: null,
//               },
//               answer: null,
//             },
//           ],
//           status: "Not Started",
//           categoryExtras: {
//             name: "Capital Gains",
//             start: "cgt-rtt",
//           },
//           intro:
//             "<p>\n                Everyone has a £6,000 capital gain allowance - so it's worth making use of it when selling assets. You\n                can also transfer assets to your spouse without creating a taxable event, so both of you can make use of\n                the allowance. Making use of allowable losses are also a great way to reduce your capital gain.\n            </p>\n            <br />\n            <p>\n                There's specific logic for each type of asset, we're building this to pick the most efficient route\n                every time.\n            </p>\n            <br />\n            <h3>Taxd currently supports:</h3>\n            <ul>\n                <li>Crypto capital gains</li>\n                <li>Listed shares and other assets</li>\n                <li>Property (Real Time Transaction)</li>\n            </ul>\n            <p>We are currently building the technology for:</p>\n            <ul>\n                <li>Businesses</li>\n                <li>and more</li>\n            </ul>\n            <p>\n                If this applies to you, get in touch with the Taxd team, who can support manually at no additional cost.\n            </p>",
//           progressBarLength: 24,
//           progressBarIndex: 0,
//         },
//         "Pension and Benefits": {
//           questionFlow: [
//             {
//               question: {
//                 question_key: "benefit-type",
//                 category: "Pension and Benefits",
//                 question:
//                   "Select all of the taxable state benefits that applied to you during the 2023/2024 tax year.",
//                 type: "Multiple Choice",
//                 sub_text:
//                   "Consult the <strong>help icon</strong> for more information.",
//                 help_text:
//                   "<h3> \nTax-free and taxable state benefits \n</h3> \n<p> \nTaxable state benefits include: \n<ul> \n<li>Bereavement Allowance (previously known as Widows Pension)</li> \n<li>Carers Allowance</li> \n<li>Contribution-based Employment and Support Allowance (ESA)</li> \n<li>Incapacity Benefit (from the 29th week you get it)</li> \n<li>Jobseekers Allowance (JSA)</li> \n<li>pensions paid by the Industrial Death Benefit scheme</li> \n<li>the State Pension</li> \n<li>Widowed Parents Allowance</li> \n</ul> \n</p> \n<p> \nTax-free state benefits include: \n<ul> \n<li>Attendance Allowance</li> \n<li>Bereavement support payment</li> \n<li>Child Benefit‚ this is income-based so you'll have to pay tax if you earn above the basic rate band</li> \n<li>Child Tax Credit</li> \n<li>Disability Living Allowance (DLA)</li> \n<li>Free TV Licence for over 75s</li> \n<li>Guardians Allowance</li> \n<li>Housing Benefit</li> \n<li>Income Support, you may have to pay tax on Income Support if you were involved in a strike</li> \n<li>Income-related Employment and Support Allowance (ESA)</li> \n<li>Industrial Injuries Benefit</li> \n<li>Bereavement Support Payments</li> \n<li>Maternity Allowance</li> \n<li>Pension Credit</li> \n<li>Personal Independence Payment (PIP)</li> \n<li>Severe Disablement Allowance</li> \n<li>Universal Credit</li> \n<li>War Widows Pension</li> \n<li>Winter Fuel Payments and Christmas Bonus</li> \n<li>Working Tax Credit</li> \n</ul> \n</p>",
//                 choices: [
//                   {
//                     key: "__bereavement_support",
//                     name: "Bereavement Support",
//                     submit: "benefit-bereavement_multi",
//                   },
//                   {
//                     key: "__carers_allowance",
//                     name: "Carer's Allowance",
//                     submit: "benefit-carers_multi",
//                   },
//                   {
//                     key: "__employment_support_allowance",
//                     name: "Employment and Support Allowance",
//                     submit: "benefit-esa_multi",
//                   },
//                   {
//                     key: "__incapacity_benefit",
//                     name: "Incapacity Benefit",
//                     submit: "benefit-incapacity_multi",
//                   },
//                   {
//                     key: "__jobseekers_allowance",
//                     name: "Jobseeker's Allowance",
//                     submit: "benefit-jsa_multi",
//                   },
//                   {
//                     key: "__state_pension",
//                     name: "State Pension",
//                     submit: "benefit-state_pension_multi",
//                   },
//                   {
//                     key: "__industrial_death_benefit_scheme",
//                     name: "Pensions paid by industrial death benefit scheme",
//                     submit: "benefit-pensionidbs_multi",
//                   },
//                   {
//                     key: "__child_benefit",
//                     name: "Child Benefit",
//                     submit: "child-earner_multi",
//                   },
//                   {
//                     key: "__other_state_benefits",
//                     name: "Other state benefits",
//                     submit: "benefit-other_pension",
//                   },
//                   {
//                     key: "__other_pensions",
//                     name: "Other UK pensions and retirement annuities",
//                     submit: "benefit-other_retirement_multi",
//                   },
//                   {
//                     key: "__overseas_pensions",
//                     name: "Overseas Pensions",
//                     submit: "pension-foreign",
//                   },
//                   {
//                     key: "__benefit-type_skip",
//                     skip: true,
//                     name: "None",
//                   },
//                 ],
//                 required: true,
//               },
//               answer: [],
//             },
//           ],
//           status: "Not Started",
//           categoryExtras: {
//             name: "Pension and Benefits",
//             start: "benefit-type",
//           },
//           intro:
//             "<p>As you selected that you had Pension income or State Benefits, we'll ask you about this here.</p>\n            <br />\n            <p>\n                Some of these benefits may be taxable or had tax withheld when you received them. Please note, universal\n                credit is <b>not</b> taxable.\n            </p>\n            <br />\n            <h3>What will we ask you?</h3>\n            <br />\n            <br />\n            <ul>\n                <li>Income relating to your pension, or state benefit.</li>\n                <li>Any taxes deducted from the pension or state benefit.</li>\n                <li>If you had child benefits, how many children you are claiming for.</li>\n            </ul>\n            <br />\n            <p>\n                You may have received a P60 (income statement) or equivalent state benefit summary documents from the UK\n                Government, please keep this to hand as you will need the annual values for the 2023/2024 tax year. As\n                always, get in touch through the chat if you have any questions.\n            </p>",
//           progressBarLength: 14,
//           progressBarIndex: 0,
//         },
//         General: {
//           questionFlow: [
//             {
//               question: {
//                 question_key: "finalising-poa_multi",
//                 category: "General",
//                 question:
//                   "Did you make any payments on account for this tax year?",
//                 type: "Boolean Multi",
//                 sub_text:
//                   "Payments on account are advance payments towards your tax bill. If over <strong>80%</strong> of your tax is deducted through employment or you had a liability under £1,000 to pay, you won't have had to make payments on account.",
//                 help_text:
//                   "<h3>Payments on account</h3>\n<p>These are advance payments towards your tax bill, (including Class 4 National Insurance if you're self-employed).</p>\n<p>You have to make 2 payments on account every year unless:</p>\n<ul>\n<li>Your last Self Assessment tax bill was less than £1,000</li>\n<li>You've already paid more than 80% of all the tax you owe, for example through your tax code or because your bank has already deducted interest on your savings</li>\n</ul>\n<p>Each payment is half your previous year's tax bill. Payments are usually due by midnight on 31 January and 31 July.</p>\n<h4>An example</h4>\n<p>Your bill for the 2020-21 tax year is £3,000. You made 2 payments on account last year of £900 each, (£1,800 in total).<br /><br />The total tax to pay by midnight on 31 January 2022 is £2,700. This includes:</p>\n<ul>\n<li>Your balancing payment of £1,200 for the 20/21 tax year, (£3,000 minus £1,800)</li>\n<li>The first payment on account of £1,500, (half your 20/21 tax bill), towards your 21/22 tax bill</li>\n</ul>\n<p>You then make a second payment on account of £1,500 on 31 July 2022.<br /><br />If your tax bill for the 21/22 tax year is more than £3,000 (the total of your 2 payments on account), you'll need to make a balancing payment by 31 January 2023.</p>",
//                 submit: "other-boolean_multi",
//                 sub_questions: [
//                   {
//                     boolean_key: "finalising-poa",
//                     show_on: true,
//                     questions: ["finalising-poa_jan", "finalising-poa_july"],
//                   },
//                 ],
//                 required: true,
//                 questionObjects: [
//                   {
//                     booleanQuestion: {
//                       question: {
//                         question_key: "finalising-poa",
//                         category: "General",
//                         question:
//                           "Did you make any payments on account for this tax year?",
//                         type: "Boolean",
//                         parent_question: "finalising-poa_multi",
//                         required: true,
//                         sub_text: null,
//                         help_text: null,
//                       },
//                       answer: null,
//                     },
//                     showOn: true,
//                     questionObjects: [
//                       {
//                         question: {
//                           question_key: "finalising-poa_jan",
//                           category: "General",
//                           question: "First payment (due January)",
//                           type: "Numeric",
//                           unit: "£",
//                           parent_question: "finalising-poa_multi",
//                           required: true,
//                           sub_text: null,
//                           help_text: null,
//                         },
//                         answer: null,
//                       },
//                       {
//                         question: {
//                           question_key: "finalising-poa_july",
//                           category: "General",
//                           question: "Second payment (due July)",
//                           type: "Numeric",
//                           unit: "£",
//                           parent_question: "finalising-poa_multi",
//                           required: true,
//                           sub_text: null,
//                           help_text: null,
//                         },
//                         answer: null,
//                       },
//                     ],
//                   },
//                 ],
//               },
//               answer: {},
//             },
//           ],
//           status: "Not Started",
//           categoryExtras: {
//             name: "General",
//             start: "finalising-poa_multi",
//           },
//           intro:
//             "<p>We're nearly there - there's just a couple questions we need to ask, for completeness.</p>\n            <br />\n            <p>\n                Some of these cases are rare, so if you have any questions or need support - get in touch with the Taxd\n                team by clicking the 'Help' icon to the bottom right of the screen.\n            </p>\n            <br />\n            <p>Estimated time to complete: 2-5 minutes.</p>",
//           progressBarLength: 19,
//           progressBarIndex: 0,
//         },
//         "Personal Info": {
//           questionFlow: [
//             {
//               question: {
//                 question_key: "personal_info-name_dob",
//                 category: "Personal Info",
//                 question: "Your name and date of birth",
//                 type: "Multi Q",
//                 sub_text:
//                   "Make sure you type your name and date of birth as it's shown on your passport or driver's license. Make sure to not use any nicknames or shortened names.",
//                 help_text:
//                   "<h3> \n Why are we asking this? \n </h3> \n <p> \nBy law, HMRC requires these details to confirm your identity. \n </p>",
//                 submit: "personal_info-country",
//                 sub_questions: [
//                   "personal_info-first_name",
//                   "personal_info-last_name",
//                   "personal_info-date_of_birth",
//                 ],
//                 required: true,
//                 questionObjects: [
//                   {
//                     question: {
//                       question_key: "personal_info-first_name",
//                       category: "Personal Info",
//                       question: "First name",
//                       type: "Free text",
//                       parent_question: "personal_info-name_dob",
//                       placeholder: "John",
//                       validation: {
//                         regex: "^[A-Za-z0-9 &'\\(\\)*,-\\.@£]{1,56}$",
//                         title: "Please enter a real name",
//                       },
//                       required: true,
//                       sub_text: null,
//                       help_text: null,
//                     },
//                     answer: "Jayanta",
//                   },
//                   {
//                     question: {
//                       question_key: "personal_info-last_name",
//                       category: "Personal Info",
//                       question: "Last name",
//                       type: "Free text",
//                       parent_question: "personal_info-name_dob",
//                       placeholder: "Smith",
//                       validation: {
//                         regex: "^[A-Za-z0-9 &'\\(\\)*,-\\.@£]{1,56}$",
//                         title: "Please enter your last name",
//                       },
//                       required: true,
//                       sub_text: null,
//                       help_text: null,
//                     },
//                     answer: "garu",
//                   },
//                   {
//                     question: {
//                       question_key: "personal_info-date_of_birth",
//                       category: "Personal Info",
//                       question: "Date of birth",
//                       type: "Date",
//                       parent_question: "personal_info-name_dob",
//                       validation: {
//                         minDate: "1851-01-01",
//                         maxDate: "2008-04-05",
//                         title: "Please enter a valid date of birth",
//                       },
//                       required: true,
//                       sub_text: null,
//                       help_text: null,
//                       tax_year: "2023/2024",
//                     },
//                     answer: null,
//                   },
//                 ],
//               },
//               answer: {
//                 "personal_info-first_name": "Jayanta",
//                 "personal_info-last_name": "garu",
//               },
//             },
//           ],
//           status: "Incomplete",
//           categoryExtras: {
//             name: "Personal Info",
//             start: "personal_info-name_dob",
//           },
//           intro:
//             '<div style="margin-bottom: 24px">\n            <p>\n                HMRC requires up-to-date information about you so we\'ll ask you a few questions about yourself -\n                your date of birth, address and contact number.\n            </p>\n            <br />\n            <p>You\'ll also need your:</p>\n            <ul>\n                <li>National Insurance Number (NINO)</li>\n                <li>Unique Taxpayer Reference (UTR)</li>\n            </ul>\n            <br />\n            <p>\n                Any questions about the UTR? Contact Taxd, or check out this\n                <a target="_blank" href="https://taxd.co.uk/blog/whats-a-utr-and-why-do-i-need-one">\n                    article.\n                </a>\n            </p>\n        </div>',
//           progressBarLength: 7,
//           progressBarIndex: 0,
//         },
//         "Finalising your return": {
//           status: "Blocked",
//           intro:
//             "<p>You are done! Your tax return for the tax year is ready to file with HMRC.</p>\n        <br />\n        <p>\n            After payment has been confirmed, we will show you all of our calculations and walk you through the tax\n            return. We will also ask you a few final questions around:\n        </p>\n        <br />\n        <ul>\n            <li>Whether you want to make payments on account (if applicable)</li>\n            <li>Whether you want to provide HMRC with any additional information with your tax return.</li>\n            <li>Identity verification for our anti-money laundering purposes.</li>\n        </ul>\n        <br />\n        <h4>Submitting to HMRC</h4>\n        <p>\n            <strong>We only need your UTR for submission.</strong> \n            We will also provide you with a copy of your full tax return to review prior to submission, and a \n            submission receipt for your records.\n        </p>\n        <br />\n        <p>\n            If you have any questions about your tax return, or the Taxd process - get in touch with the Taxd team\n            through the chat on the bottom right of the screen.\n        </p>",
//         },
//         Employer: {
//           categoryExtras: {
//             start: "employer-name",
//             child_name: "employer-name",
//             parent_category: "Employment",
//             parent_question: "employer-addnew",
//             name: "Employer",
//           },
//         },
//         "Self Employed Business": {
//           categoryExtras: {
//             start: "self-intro_multi",
//             child_name: "self-intro_multi.self-name",
//             parent_category: "Self Employed",
//             parent_question: "self-addnew",
//             name: "Self Employed Business",
//           },
//         },
//         "Partnership Business": {
//           categoryExtras: {
//             start: "partnership-intro_multi",
//             child_name: "partnership-intro_multi.partnership-name",
//             parent_category: "Partnership",
//             parent_question: "partnership-addnew",
//             name: "Partnership Business",
//           },
//         },
//         "Rental Property": {
//           categoryExtras: {
//             start: "rental-types",
//             child_name: "rental-address",
//             parent_category: "Rental",
//             parent_question: "rental-addproperty",
//             name: "Rental Property",
//           },
//         },
//       },
//       assessmentType: "full",
//       lastSubmittedQuestion: "intro-assets",
//     },
//   },
//   events: [
//     {
//       name: "question_submitted",
//       params: {
//         user_id: "663de0edda060cd0b4195afa",
//         question: "intro-assets",
//         category: "Introduction",
//         success: "true",
//       },
//     },
//     {
//       name: "category_completed",
//       params: {
//         category: "Introduction",
//       },
//     },
//   ],
// };

export const surveyData = {
  success: true,
  data: {
    data: {
      dynamicCalculation: {
        taxPosition: 12397626.743253428,
        totalIncome: 72091104.3077962,
        capitalIncome: 0,
        allowableExpenses: 0,
        taxPaid: 19842220.307796195,
        taxLiability: 32239847.051049624,
        studentLoanDue: 0,
        NICDue: 0,
        capitalGainsTax: 0,
      },
      categories: {
        Introduction: {
          questionFlow: [
            {
              question: {
                question_key: "intro-taxyearoptions",
                category: "Introduction",
                question: "Have any of these applied to you?",
                type: "MultipleChoice",
                elementType: "groupCheckbox",
                sub_text:
                  "These situations are likely to be rare. Consult the <em>help</em> icon to learn more.\n<p>You can select more than one answer.</p>",
                help_text:
                  "<h3>Tax situations</h3>\n<h4>Had non-UK income</h4>\n<p>Foreign income can include:</p>\n<ul>\n<li>Wages if you work abroad</li>\n<li>Foreign investment income (for example, dividends and savings interest)</li>\n<li>Income from property owned overseas</li>\n<li>Income from pensions held overseas</li>\n</ul>\n<p>Note that gifts from immediate family are mostly considered non-taxable and reportable. Please make sure to check this with a specialist.</p>\n<h4>Resident of another country</h4>\n<p>If you are a resident of another country, you're likely asked to pay tax there as well. This causes additional work on the UK returns which we are still developing the technology for.</p>\n<p>If you're not sure if you're a resident overseas, please contact your local tax office to find out. Most commonly, if you spend more than <strong>183 days</strong> or more in a year in a certain place, you count as a resident. However, each country has its own legislation.</p>\n<h4>Partnership income</h4>\n<p>Partnership (LLPs) involve sharing profits between business partners. This income is taxed separately on the Self Assessment tax return.</p>\n<h4>Trust income</h4>\n<p>A trust is a way of managing assets (money, investments, land or buildings) for people. There are different types of trusts and they are taxed differently.</p>\n<h4>Overseas pension scheme</h4>\n<p>Contributions to an overseas pension scheme can incur additional charges, depending on the country and pension scheme.</p>\n<p>HMRC regularly updates a list of registered overseas pension schemes.</p>",
                submit: "intro-nondom",
                choices: [
                  {
                    key: "__income_overseas",
                    name: "Income from overseas",
                    icon: "currenciesother.svg",
                    isChecked: false,
                  },
                  {
                    key: "__resident_other_country",
                    name: "Resident of another country",
                    icon: "americas.svg",
                    isChecked: false,
                  },
                  {
                    key: "__trust_income",
                    name: "Trust income",
                    icon: "trust.svg",
                    isChecked: false,
                  },
                  {
                    key: "__overseas_pension",
                    name: "Overseas pension scheme",
                    icon: "cloud-rain.svg",
                    isChecked: false,
                  },
                  {
                    key: "__intro-taxyearoptions_skip",
                    skip: true,
                    name: "No",
                    isChecked: false,
                  },
                ],
                required: true,
              },
              answer: [],
            },
            {
              question: {
                question_key: "intro-nondom",
                category: "Introduction",
                question: "Did you keep your foreign income overseas?",
                type: "Boolean",
                elementType: "groupCheckbox",
                sub_text:
                  "If you are a UK national then this is likely a 'No'. If you are looking to claim the remittance basis please select 'Yes'",
                help_text:
                  "<h3>Remittance Basis</h3>\n<p>The remittance basis is an alternative tax treatment that’s available to individuals who are resident but not domiciled in the UK and have foreign income and gains. Remittance basis is not available if you are deemed domicile in the UK. You will be deemed domicile if you were born in the UK with UK domicile of origin and UK resident in 2022 to 2023 tax year, or you have been UK resident for at least 15 of the previous 20 tax years and UK resident in 2022 to 2023 tax year.</p>",
                submit: "intro-jobstatus",
                display_rulesets: [
                  {
                    if_display_false: "intro-jobstatus",
                    rules: [
                      {
                        question_key: "intro-taxyearoptions",
                        operator: "contains",
                        value: "__income_overseas",
                      },
                      {
                        question_key: "intro-taxyearoptions",
                        operator: "contains",
                        value: "__overseas_pension",
                      },
                    ],
                    type: "or",
                  },
                ],
                choices: [
                  {
                    key: "yes",
                    name: "Yes",
                    icon: "currenciesother.svg",
                    isChecked: false,
                  },
                  {
                    key: "__intro-taxyearoptions_skip",
                    name: "No",
                    icon: "americas.svg",
                    isChecked: false,
                    skip: true,
                  },
                ],
                required: true,
                errorMessage: "Please select an option",
              },
              answer: ["__intro-nondom_yes"],
            },
            {
              question: {
                question_key: "intro-jobstatus",
                category: "Introduction",
                question: "Your job status in 2023/2024",
                type: "MultipleChoice",
                elementType: "groupCheckbox",
                sub_text:
                  "<p>You can select more than one.</p><br /><strong>If you're not a UK tax resident, please only select UK sources of income. You can come back and change this during your main tax return too.</strong>",
                help_text:
                  "<h3>Job Status</h3>\n<p>Your job status determines which parts of the tax return will need to be completed.</p>\n<p>Select <strong>employed </strong>if you</p>\n<ul>\n<li>work for an employer who deducts tax through PAYE</li>\n<li>received income as a company director</li>\n<li>hold an office such as a chairperson, secretary or treasurer and received an income for that work</li>\n<li>work for one person through another company or partnership</li>\n</ul>\n<p>If you were the <strong>director of a ltd company,</strong> this is technically the same as employment.</p>\n<p>Select <strong>self-employed</strong> if you're working for yourself as a freelance or the owner of a business rather than for an employer.</p>\n<p>Select <strong>landlord</strong> if you have rental properties held in your personal name.</p>\n<p>If neither of the above options apply to you, select <strong>No employment</strong>.</p>",
                submit: "intro-income",
                choices: [
                  {
                    key: "__employed",
                    name: "Employed",
                    icon: "users.svg",
                  },
                  {
                    key: "__self_employed",
                    name: "Self-employed",
                    icon: "user.svg",
                  },
                  {
                    key: "__partnership",
                    name: "Partnership",
                    icon: "partnership.svg",
                  },
                  {
                    key: "__director",
                    name: "Director of Ltd Company",
                    icon: "director.svg",
                  },
                  {
                    key: "__landlord",
                    name: "Landlord",
                    icon: "landlord.svg",
                  },
                  {
                    key: "__intro-jobstatus_skip",
                    skip: true,
                    name: "No employment",
                  },
                ],
                required: true,
              },
              answer: [],
            },
            {
              question: {
                question_key: "intro-income",
                category: "Introduction",
                question: "Additional sources of income",
                type: "MultipleChoice",
                elementType: "groupCheckbox",
                sub_text: "Include all that apply to you.",
                help_text:
                  "<h3>Additional income</h3><br/><h4>Interest</h4>\n<p>Interest includes the returns on a savings account you may hold with a bank or building society.</p>\n<p>You may receive a tax statement from your bank or building society.</p>\n<h4>Dividends</h4>\n<p>A dividend is the share of a company's profits that is distributed to shareholders.</p>\n<p>You may receive a tax statement from your brokerage, but this can also be provided by funds. Funds collate the dividends from the companies they hold and then make payments to you once a year, twice a year, or quarterly.</p>\n<h4>Rental income</h4>\n<p>If you're a landlord, you may receive rental income for your UK properties. This might be related to residential lettings including renting out part of your own home or furnished holiday lettings.</p>\n<p>It makes everything easier if you've been keeping track of your turnover and expenses throughout the year!</p>\n<h4>Pension or state benefits</h4>\n<p>State benefits include allowances that the government may provide.</p>\n<p>There are several tax free benefits so we'll be asking you questions about this later, if this section applies to you.</p><h3>Crypto Activities</h3><h4>Mining</h4><ul><li>Taxable as trading or miscellaneous income depending on the activity's commercial nature.</li><li>Eligible for the £1,000 trading allowance, potentially exempting low amounts from reporting.</li></ul><h4>Staking</h4><ul><li>Rewards taxable as trading or miscellaneous income, similar to interest earnings.</li><li>In certain situations, may be treated as capital receipts.</li><li>Transferred ownership during staking considered a disposal for capital gains tax by HMRC.</li></ul><h4>Airdrops</h4><ul><li>Taxable if received in exchange for services.</li><li>The reason for receipt affects tax treatment.</li></ul>",
                submit: "intro-assets",
                choices: [
                  {
                    key: "__interest",
                    name: "Interest",
                    icon: "interest.svg",
                  },
                  {
                    key: "__dividends",
                    name: "Dividends",
                    icon: "dividends.svg",
                  },
                  {
                    key: "__rental_income",
                    name: "Rental income",
                    icon: "propertyincome.svg",
                  },
                  {
                    key: "__pensions",
                    name: "Pension",
                    icon: "cloud-rain.svg",
                  },
                  {
                    key: "__benefits",
                    name: "State benefits",
                    icon: "cloud-rain.svg",
                  },
                  {
                    key: "__crypto_activities",
                    name: "Crypto activities",
                    icon: "cryptocurrency.svg",
                  },
                  {
                    key: "__intro-income_skip",
                    skip: true,
                    name: "None",
                  },
                ],
                required: true,
              },
              answer: [],
            },
            {
              question: {
                question_key: "intro-assets",
                category: "Introduction",
                question: "Have you sold any assets?",
                type: "MultipleChoice",
                elementType: "groupCheckbox",
                sub_text: "Select the asset that you sold below.",
                help_text:
                  '<h3>Capital gains</h3>\n<p><a rel="noopener" href="https://www.taxd.co.uk/post/capital-gains-101" target="_blank">Capital Gains Tax</a> is a tax on the profit when you sell (or dispose of) something (an asset) that\'s increased in value. It\'s the gain you make that\'s taxed, not the total amount of money you receive.</p>\n<p>In the UK, each resident is entitled up to <strong>£12,300</strong> of gains tax free for the year. If your gain was above this, you\'ll need to report this during your Self Assessment.</p>\n<p>If your gain was less than £12,300. feel free to skip this question or select n<strong>o sales</strong>.</p>\n<p>If you made a loss, you still have the option to select the relevant option. Our software remembers this and can offset against gains you might make in the future.</p>\n<p>Disposal of an asset includes:</p>\n<ul>\n<li>Selling it</li>\n<li>Giving it away as a gift or transferring it to someone else</li>\n<li>Swapping it for something else</li>\n<li>Getting compensation for it (like an insurance pay-out if the asset was lost or destroyed)</li>\n</ul>',
                choices: [
                  {
                    key: "__property_land",
                    name: "Property and land",
                    icon: "propertyandland.svg",
                    isChecked: false,
                  },
                  {
                    key: "__unlisted_shares",
                    name: "Unlisted Shares",
                    icon: "shares.svg",
                    isChecked: false,
                  },
                  {
                    key: "__listed_shares",
                    name: "Listed Shares",
                    icon: "shares.svg",
                    isChecked: false,
                  },
                  {
                    key: "__crypto",
                    name: "Cryptocurrency",
                    icon: "cryptocurrency.svg",
                    isChecked: false,
                  },
                  {
                    key: "__personalbusiness",
                    name: "Business asset",
                    icon: "contract.svg",
                    isChecked: false,
                  },
                  {
                    key: "__other",
                    name: "Other assets",
                    icon: "contract.svg",
                    isChecked: false,
                  },
                  {
                    key: "__emi",
                    name: "EMI/BADR",
                    icon: "contract.svg",
                    isChecked: false,
                  },
                  {
                    key: "__intro-assets_skip",
                    skip: true,
                    name: "No",
                    isChecked: false,
                  },
                ],
                required: true,
              },
              answer: [],
            },
          ],
          status: "Complete",
          categoryExtras: {
            name: "Introduction",
            start: "intro-taxyear",
          },
          summary: {
            title: "Introduction",
            subtext:
              "The introduction questions helped us select questions for you to answer and submit a thorough tax return. Here's what you told us:",
            data: [
              {
                value:
                  "You were <strong>Employed, Self-employed, Partnership, a Director of Ltd Company and a Landlord</strong>.",
              },
              {
                value:
                  "You received <strong>interest, dividends, rental income, pension, state benefits and crypto activities</strong>.",
              },
              {
                value:
                  "You sold <strong>property and land, unlisted shares, listed shares, cryptocurrency, business asset, other assets and emi/badr</strong>.",
              },
            ],
          },
          progressBarLength: 9,
          progressBarIndex: 9,
        },
        Residence: {
          questionFlow: [
            {
              question: {
                question_key: "residence-nonres_tests",
                category: "Residence",
                question: "Automatic non-resident tests",
                type: "Multi Toggle",
                sub_text: "We’re going to ask you questions to help determine your tax residence.",
                submit: "residence-res_tests",
                if_true: "residence-days_multi",
                sub_questions: [
                  "residence-nonres_46",
                  "residence-nonres_16",
                  "residence-nonres_fto",
                ],
                required: true,
                help_text: null,
                questionObjects: [
                  {
                    question: {
                      question_key: "residence-nonres_46",
                      category: "Residence",
                      question:
                        "You were a <strong>non-UK resident throughout the whole of the previous three tax years</strong> and present in UK for <strong>less than</strong> 46 days in the 2023/2024 tax year.",
                      type: "Toggle",
                      parent_question: "residence-nonres_tests",
                      required: true,
                      sub_text: null,
                      help_text: null,
                    },
                    answer: false,
                  },
                  {
                    question: {
                      question_key: "residence-nonres_16",
                      category: "Residence",
                      question:
                        "You were a <strong>resident in UK in at least one of the previous three tax years</strong> and present in UK <strong>less than</strong> 16 days in the 2023/2024 tax year.",
                      type: "Toggle",
                      parent_question: "residence-nonres_tests",
                      required: true,
                      sub_text: null,
                      help_text: null,
                    },
                    answer: false,
                  },
                  {
                    question: {
                      question_key: "residence-nonres_fto",
                      category: "Residence",
                      question:
                        "You are working full time overseas and were present in UK for <strong>less than</strong> 91 days and spent <strong>less than</strong> 31 days working in UK.",
                      type: "Toggle",
                      help_text:
                        "<h3>Automatic Non Residence Test - Overseas Work</h3><p>To be a non-UK resident for the tax year while working full-time overseas, consider these conditions:</p><ol><li><p>Spend fewer than 91 days in the UK in the tax year.</p></li><li><p>Work for more than 3 hours in the UK on less than 31 days.</p></li><li><p>Avoid significant breaks in your overseas work.</p></li></ol><p>A significant break means at least 31 days pass, and none of those days involve:</p><ul><li>Working for more than 3 hours overseas</li><li>Would-be overseas work (more than 3 hours) but did not happen due to leave (annual, sick, or parenting)</li></ul><p>Important to note:</p><ul><li>A significant break disqualifies you from full-time work overseas.</li><li>This test applies to both employees and the self-employed.</li><li>It does not apply to voluntary workers or those with jobs on vehicles, aircraft, or ships.</li></ul>",
                      parent_question: "residence-nonres_tests",
                      required: true,
                      sub_text: null,
                    },
                    answer: false,
                  },
                ],
              },
              answer: {
                "residence-nonres_46": false,
                "residence-nonres_16": false,
                "residence-nonres_fto": false,
              },
            },
            {
              question: {
                question_key: "residence-res_tests",
                category: "Residence",
                question: "Automatic resident tests",
                type: "Multi Q",
                submit: "residence-res_threeyears",
                sub_questions: ["residence-res_183", "residence-res_homes", "residence-res_75"],
                required: true,
                sub_text: null,
                help_text: null,
                questionObjects: [
                  {
                    question: {
                      question_key: "residence-res_183",
                      category: "Residence",
                      question:
                        "Were you present in the UK 183 days or more in the 2023/2024 tax year?",
                      type: "Toggle",
                      parent_question: "residence-res_tests",
                      required: true,
                      sub_text: null,
                      help_text: null,
                    },
                    answer: true,
                  },
                  {
                    question: {
                      question_key: "residence-res_homes",
                      category: "Residence",
                      question:
                        "Was your accessible home only in the UK and did you spend more than 30 days in this home?",
                      type: "Toggle",
                      sub_text:
                        "This means that you have a home in the UK that is available for you to stay at. For example, you may have 2 bedrooms and rent 1 room while you're away.",
                      help_text:
                        "<h3>Automatic Residence Test - Accomodation</h3><h3>You will be a UK resident for the tax year if you have, or have had, a home in the UK for all or part of the year, and the following conditions apply:</h3><ol><li>You had a home in the UK for at least one period of 91 consecutive days.</li><li>At least 30 of those 91 days fall within the tax year when you have a home in the UK, and you&#39;ve been present in that home for at least 30 days at any time during the year.</li><li>At that time, you had no overseas home, or if you had an overseas home, you were present in it for fewer than 30 days in the tax year.</li></ol><p>If you have more than one home in the UK, consider each separately to see if you meet the test, and meeting it for one of your UK homes is sufficient.</p>",
                      parent_question: "residence-res_tests",
                      required: true,
                    },
                    answer: true,
                  },
                  {
                    question: {
                      question_key: "residence-res_75",
                      category: "Residence",
                      question:
                        "Were more than 75% of your workdays in the UK? A workday is 3 hours or more.",
                      type: "Toggle",
                      help_text:
                        "<h3>Automatic Residence Test - Workdays</h3><p>You will be a UK resident for the tax year if the following conditions are met:</p><ol><li>You work full-time in the UK for any 365-day period within the tax year.</li><li>More than 75% of the days in that 365-day period, when you work for more than 3 hours, occur in the UK.</li><li>At least one day, which must fall within both the 365-day period and the tax year, involves you working for more than 3 hours in the UK.</li></ol>",
                      parent_question: "residence-res_tests",
                      required: true,
                      sub_text: null,
                    },
                    answer: false,
                  },
                ],
              },
              answer: {
                "residence-res_183": true,
                "residence-res_homes": true,
                "residence-res_75": false,
              },
            },
            {
              question: {
                question_key: "residence-res_threeyears",
                category: "Residence",
                question: "Were you a UK resident in any of the previous three tax years?",
                sub_text: "For reference, we're currently looking at the 2023/2024.",
                type: "Boolean",
                submit: "residence-ties",
                required: true,
                help_text: null,
              },
              answer: true,
            },
            {
              question: {
                question_key: "residence-ties",
                category: "Residence",
                question: "Ties to the UK",
                type: "Multi Q",
                sub_text:
                  "We'll work out your UK residence position for 2023/2024, by reviewing your ties to the UK in combination with the number of days you spend in the UK.",
                help_text:
                  '<h3>UK Sufficient Ties Test</h3><p>To determine your UK residence status for the tax year when you don&#39;t meet any of the automatic overseas or UK tests, you&#39;ll need to apply the Sufficient Ties Test. This involves evaluating your connections to the UK, referred to as &quot;ties,&quot; in combination with the number of days you spend in the UK during that tax year.</p><p>If you were not a UK resident in any of the 3 tax years before the one you&#39;re considering, check if you have any of the following ties:</p><ul><li>A family tie</li><li>An accommodation tie</li><li>A work tie</li><li>A 90-day tie</li></ul><p>If you were a UK resident in one or more of the 3 tax years before the one you&#39;re considering, you&#39;ll also need to assess whether you have a country tie.</p><p>Keep in mind that the more UK ties you have, the fewer days you can spend in the UK before becoming a UK resident.</p><p>Full details can be found by <a href="https://cdn.taxd.co.uk/UK_Residence_Tests_d1b384aca6.pdf">clicking here</a>.</p>',
                submit: "residence-days_multi",
                sub_questions: [
                  "residence-ties_family",
                  "residence-ties_40days",
                  "residence-ties_ukhome",
                  "residence-ties_90daysprev",
                  "residence-ties_countrysplit",
                ],
                required: true,
                questionObjects: [
                  {
                    question: {
                      question_key: "residence-ties_family",
                      category: "Residence",
                      question: "Do you have immediate family members who are resident in the UK?",
                      type: "Toggle",
                      sub_text: "A person's immediate family is their husband/wife and children.",
                      help_text:
                        "<h3>Family Ties</h3><ul><li>Husband, wife, or civil partner (unless they are separated).</li><li>Partner, provided they are living together as if married or as civil partners.</li><li>Child, if the child is under 18 years old.</li></ul><p>However, a family tie with a child under 18 does not exist if the individual spends less than a total of 61 days in the UK with that child during the tax year. If the child turns 18 during the tax year, the individual will not have a family tie concerning that child if they have seen the child on fewer than 61 days in the UK before the child&#39;s birthday.</p><p>Partners can meet this test by living together either in the UK, overseas, or both. Separation is defined as either being under a court order, deed of separation, or in circumstances indicating a likely permanent separation.</p>",
                      parent_question: "residence-ties",
                      required: true,
                    },
                    answer: false,
                  },
                  {
                    question: {
                      question_key: "residence-ties_40days",
                      category: "Residence",
                      question: "Did you work for more than 40 days in the UK?",
                      type: "Toggle",
                      parent_question: "residence-ties",
                      required: true,
                      sub_text: null,
                      help_text: null,
                    },
                    answer: true,
                  },
                  {
                    question: {
                      question_key: "residence-ties_ukhome",
                      category: "Residence",
                      question: "Do you have accessible accommodation in the UK?",
                      type: "Toggle",
                      sub_text:
                        "This means that you have a home in the UK that is available for you to stay at. For example, you may have 2 bedrooms and rent 1 room while you're away.",
                      help_text:
                        "<h3>Accommodation Tie</h3><ul><li>You need the accommodation available for at least 91 continuous days in the tax year.</li><li>You must stay there for at least 1 night during the tax year.</li></ul><p>For example, consider Peter, who left the UK to travel. He doesn't have a UK home but can stay with his cousin for extended periods when visiting. Even without a permanent home, Peter has an accommodation tie.</p><p>The key difference between \"home\" for SRT purposes and available accommodation is that the latter can be temporary and doesn't require the same stability or permanence. So, if you lack a UK home, having a place to stay in the UK can still create an accommodation tie.</p>",
                      parent_question: "residence-ties",
                      required: true,
                    },
                    answer: true,
                  },
                  {
                    question: {
                      question_key: "residence-ties_90daysprev",
                      category: "Residence",
                      question:
                        "Were you in the UK for more than 90 days in either of the previous two tax years?",
                      type: "Toggle",
                      parent_question: "residence-ties",
                      required: true,
                      sub_text: null,
                      help_text: null,
                    },
                    answer: false,
                  },
                  {
                    question: {
                      question_key: "residence-ties_countrysplit",
                      category: "Residence",
                      question:
                        "Were you in the UK for more days than another country during the 2023/2024 tax year?",
                      type: "Toggle",
                      parent_question: "residence-ties",
                      required: true,
                      sub_text: null,
                      help_text: null,
                    },
                    answer: false,
                  },
                ],
              },
              answer: {
                "residence-ties_family": false,
                "residence-ties_40days": true,
                "residence-ties_ukhome": true,
                "residence-ties_90daysprev": false,
                "residence-ties_countrysplit": false,
              },
            },
            {
              question: {
                question_key: "residence-days_multi",
                category: "Residence",
                question: "Days in the UK",
                type: "Multi Q",
                help_text:
                  "<h3>UK Sufficient Ties Test</h3><p>To determine your UK residence status for the tax year when you don’t meet any of the automatic overseas or UK tests, you’ll need to apply the Sufficient Ties Test. This involves evaluating your connections to the UK, referred to as “ties,” in combination with the number of days you spend in the UK during that tax year.</p><p>If you were not a UK resident in any of the 3 tax years before the one you’re considering, check if you have any of the following ties:</p><ul><li>A family tie</li><li>An accommodation tie</li><li>A work tie</li><li>A 90-day tie</li></ul><p>If you were a UK resident in one or more of the 3 tax years before the one you’re considering, you’ll also need to assess whether you have a country tie.</p><p>Keep in mind that the more UK ties you have, the fewer days you can spend in the UK before becoming a UK resident.</p><p>Full details can be found by <a href=“https://cdn.taxd.co.uk/UK_Residence_Tests_d1b384aca6.pdf”>clicking here</a>.</p>",
                submit: "residence-country_multi",
                sub_questions: [
                  "residence-days",
                  "residence-workdays",
                  "residence-exceptionaldays",
                ],
                required: true,
                sub_text: null,
                questionObjects: [
                  {
                    question: {
                      question_key: "residence-days",
                      category: "Residence",
                      question:
                        "How many days did you spend in the UK during the 2023/2024 tax year?",
                      type: "Numeric",
                      parent_question: "residence-days_multi",
                      required: true,
                      validation: {
                        max: 366,
                      },
                      sub_text: null,
                      help_text: null,
                    },
                    answer: null,
                  },
                  {
                    question: {
                      question_key: "residence-workdays",
                      category: "Residence",
                      question: "How many of these days were spent working?",
                      type: "Numeric",
                      sub_text:
                        "A day is classed as a workday if you <strong>work for 3 hours or more</strong> on a given day.",
                      parent_question: "residence-days_multi",
                      validation: {
                        max: 366,
                      },
                      help_text: null,
                    },
                    answer: null,
                  },
                  {
                    question: {
                      question_key: "residence-exceptionaldays",
                      category: "Residence",
                      question: "How many of these days were due to exceptional circumstances?",
                      type: "Numeric",
                      sub_text:
                        "You can mark this as 0, if no days were due to exceptional circumstances.",
                      help_text:
                        "<h3>Exceptional Circumstances</h3>\n<p>In the context of UK tax residency, \"exceptional circumstances\" refers to situations beyond an individual's control that prevent them from leaving the UK, despite their intention to do so. These circumstances can include:</p>\n<ul>\n<li>Serious illness or injury affecting the individual or a close family member</li>\n<li>Natural disasters or political unrest in the individual's home country</li>\n<li>Travel disruptions, such as flight cancellations or border closures</li>\n</ul>\n<p>If an individual is unable to leave the UK due to exceptional circumstances, the days they spend in the UK may not be counted towards the 183-day limit for tax residency purposes.</p>",
                      parent_question: "residence-days_multi",
                      validation: {
                        min: 0,
                        max: 60,
                      },
                    },
                    answer: null,
                  },
                ],
              },
              answer: {},
            },
          ],
          rule: [{ categories: "Introduction", question_key: "intro-taxyearoptions" }],
          status: "Incomplete",
          categoryExtras: {
            name: "Residence",
            start: "residence-nonres_tests",
          },
          intro:
            "<p>If you live abroad or call another country home, don't worry, we've got you covered in the Residence category. We'll ask you about:</p>\n        <ul>\n            <li>days in the UK</li>\n            <li>workdays in the UK</li>\n            <li>other countries you've lived in</li>\n            <li>your nationalities</li>\n            <li>and your ties to the UK.</li>\n        </ul>\n        <p>A couple of important things to keep in mind:</p>\n        <ol>\n            <li>If you stayed outside the UK all year or are considered a non-resident, you only need to report your UK income.</li>\n            <li>If you're a UK resident but not originally from here, you might be eligible for the 'Remittance Basis.'</li>\n        </ol>\n        <p>Just ask us in the help chat if you're unsure about anything. We're here to assist you!</p>",
          progressBarLength: 32,
          progressBarIndex: 4,
        },
        Employment: {
          questionFlow: [
            {
              question: {
                question_key: "employer-addnew",
                category: "Employment",
                question: "Select 'Add New' to add an employment below",
                type: "Array",
                sub_text:
                  "You can edit any existing employments here or select 'add new' to create a new employment.",
                child_category: "Employer",
                required: true,
                help_text: null,
              },
              answer: [
                {
                  id: "6641b3ac64e5d9924666697c",
                  result: {
                    questionFlow: [
                      {
                        question: {
                          question_key: "employer-name",
                          category: "Employer",
                          question: "What was the company name?",
                          type: "Free text",
                          sub_text: "Click on the help text icon above if you need assistance.",
                          help_text:
                            '<h3>How do I find out my employer\'s name?</h3>\n<p>You can find your employer\'s name on payslips, a P60 or by searching the Companies House <a rel="noopener" href="https://find-and-update.company-information.service.gov.uk/" target="_blank">register</a>. This is the UK\'s register of all companies. From here, you can search for a company name, officer name or company number.</p>\n<h4>What if my employer is not on the register?</h4>\n<p>Your employer may not be found on Companies House if they are contracting you, they are a charity, foundation, or trust.</p>\n<p>The Charity Commission for England and Wales has a <a rel="noopener" href="https://register-of-charities.charitycommission.gov.uk/charity-search" target="_blank">register of charities</a>. From here, you can search for the charity name, charity number or other helpful keywords.</p>',
                          submit: "employer-foreignmulti",
                          validation: {
                            regex: "^[A-Za-z0-9 &'\\(\\)\\*,\\-\\.\\/@£]{1,28}$",
                            title: "Please enter your employer's name",
                          },
                          required: true,
                        },
                        answer: null,
                      },
                    ],
                    status: "Not Started",
                    categoryExtras: {
                      name: "Employer",
                      start: "employer-name",
                      child_name: "employer-name",
                      parent_category: "Employment",
                      parent_question: "employer-addnew",
                    },
                    progressBarLength: 34,
                    progressBarIndex: -1,
                  },
                  summary: {
                    title: "Incomplete employment",
                    subtext:
                      "This employment still has some answers left to complete before we can provide you with a complete summary!",
                    data: [],
                  },
                },
              ],
            },
          ],
          status: "Incomplete",
          categoryExtras: {
            name: "Employment",
            start: "employer-addnew",
          },
          intro:
            '<div style="margin-bottom: 24px">\n                <p>\n                    You selected that you were employed during the tax year. During this part of the questionnaire\n                    you will give us the necessary details to complete the required Self Assessment fields.\n                </p>\n            </div>\n            <div style="margin-bottom: 24px">\n                <p>\n                    We can automatically pull data from HMRC around your employment earnings, benefits and taxes\n                    paid. Click the Cloud icon at the top right to connect your account.\n                </p>\n                <br />\n                <p style="font-weight: 500">You will need your HMRC Government Gateway ID and Password.</p>\n            </div>\n            <div style="margin-bottom: 24px">\n                <h3>How can I maximise my tax efficiency here?</h3>\n                <br />\n                <br />\n                <p>\n                    If you spent any work days at a different location or office to your main office, then you may\n                    be able to file temporary workplace expenses.\n                </p>\n                <br />\n                <p>\n                    And if you didn\'t receive all the personal allowance you were entitled to, we will ensure this\n                    is allocated to you.\n                </p>\n            </div>\n            <div style="margin-bottom: 24px">\n                <h3>Make sure to have these handy...</h3>\n                <br />\n                <br />\n                <ul>\n                    <li>\n                        <span className="semibold">P60, P45, or P11D documents</span>\n                    </li>\n                    <li>\n                        <span className="semibold">Details of your expenses</span> (For the year)\n                    </li>\n                </ul>\n            </div>',
          progressBarLength: 1,
          progressBarIndex: 0,
        },
        "Self Employed": {
          questionFlow: [
            {
              question: {
                question_key: "self-addnew",
                category: "Self Employed",
                question: "Select 'add new' to add a self-employment below",
                type: "Array",
                child_category: "Self Employed Business",
                required: true,
                sub_text: null,
                help_text: null,
              },
              answer: [
                {
                  id: "664194e364e5d99246666882",
                  result: {
                    questionFlow: [
                      {
                        question: {
                          question_key: "self-intro_multi",
                          category: "Self Employed Business",
                          question: "The basics",
                          type: "Multi Q",
                          sub_text: "Let's get to know each other.",
                          submit: "self-newdetails",
                          sub_questions: ["self-name", "self-description", "self-postcode"],
                          required: true,
                          help_text: null,
                          questionObjects: [
                            {
                              question: {
                                question_key: "self-name",
                                category: "Self Employed Business",
                                question: "Self-employment name",
                                type: "Free text",
                                sub_text: "Your name, or the name of your business.",
                                help_text:
                                  "<h3>Self Employment Name</h3>\n<p>This is the name that HMRC will see. You can either choose your trading name or personal name.</p>",
                                parent_question: "self-intro_multi",
                                validation: {
                                  regex: "^[A-Za-z0-9 &'\\(\\)*,-\\.@£]{1,56}$",
                                  title:
                                    "Maximum 56 characters allowed. Allowed characters are A-Za-z0-9&'()*,-.@£",
                                },
                                required: true,
                              },
                              answer: "Jayanta garu",
                            },
                            {
                              question: {
                                question_key: "self-description",
                                category: "Self Employed Business",
                                question: "How would you describe your business?",
                                type: "Free text",
                                sub_text:
                                  "We just need a brief description of what your business or self-employment does.",
                                help_text:
                                  '<h3>Business Description</h3>\n<p>Next, we need a brief description of the service you provide through your business or self-employment.</p>\n<p>For example, if you run physical exercise classes, a suitable description could be "<strong>personal training service</strong>."</p>',
                                parent_question: "self-intro_multi",
                                validation: {
                                  regex: "^[A-Za-z0-9 &'\\(\\)*,-\\.@£]{1,28}$",
                                  title:
                                    "28 characters allowed. Allowed characters are A-Za-z0-9&'()*,-.@£",
                                },
                                required: true,
                              },
                              answer: "bbb",
                            },
                            {
                              question: {
                                question_key: "self-postcode",
                                category: "Self Employed Business",
                                question: "What is the postcode of your business address?",
                                type: "Postcode",
                                sub_text:
                                  "If you have a separate address you run your self-employment from, provide this postcode. If not, then it is likely to be your home postcode.",
                                help_text:
                                  "<h3>Business Postcode</h3>\n<p>If you run this self-employment from home, simply put in your home postcode. If you have a separate address that is tied to your self-employment service, please provide us with this postcode.</p><h4>Non-UK</h4><p>Please be aware that HM Revenue & Customs (HMRC) does not accept non-UK postcodes. If you are a non-resident, it's important to know that you are not required to declare any self-employment income earned outside the UK. Therefore, if you do not have self-employment details to report, you may exclude this section from the Introduction.</p>",
                                parent_question: "self-intro_multi",
                                validation: {
                                  regex:
                                    "^((GIR 0AA)|((([A-Za-z][0-9][0-9]?)|(([A-Za-z][A-Ha-hJ-Yj-y][0-9][0-9]?)|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z]))))( |)[0-9][A-Za-z]{2}))$",
                                  title:
                                    "Please enter a valid postcode. For example, A26 9AA or BK12 1DF.",
                                },
                                required: true,
                              },
                              answer: "A269AA",
                            },
                          ],
                        },
                        answer: {
                          "self-name": "Jayanta garu",
                          "self-postcode": "A269AA",
                          "self-description": "bbb",
                        },
                      },
                      {
                        question: {
                          question_key: "self-newdetails",
                          category: "Self Employed Business",
                          question: "Have any of the details above changed within the past year?",
                          type: "Boolean Multi",
                          sub_text:
                            "If your details have changed since your last tax return was submitted, we'll need your <strong>old</strong> details to update HMRC.",
                          submit: "self-foreignmulti",
                          sub_questions: [
                            {
                              boolean_key: "self-detailchanges",
                              show_on: true,
                              questions: [
                                "self-newname",
                                "self-newdescription",
                                "self-newpostcode",
                              ],
                            },
                          ],
                          required: true,
                          help_text: null,
                          questionObjects: [
                            {
                              booleanQuestion: {
                                question: {
                                  question_key: "self-detailchanges",
                                  category: "Self Employed Business",
                                  question:
                                    "Have any of your business details changed within the past year?",
                                  type: "Boolean",
                                  sub_text:
                                    "This can include the trading name, description, address or postcode.",
                                  parent_question: "self-newdetails",
                                  required: true,
                                  help_text: null,
                                },
                                answer: true,
                              },
                              showOn: true,
                              questionObjects: [
                                {
                                  question: {
                                    question_key: "self-newname",
                                    category: "Self Employed Business",
                                    question: "Old business name",
                                    type: "Free text",
                                    parent_question: "self-newdetails",
                                    sub_text: null,
                                    help_text: null,
                                  },
                                  answer: null,
                                },
                                {
                                  question: {
                                    question_key: "self-newdescription",
                                    category: "Self Employed Business",
                                    question: "Old description of business",
                                    type: "Free text",
                                    sub_text:
                                      "We just need a brief description of what your business or self-employment does.",
                                    parent_question: "self-newdetails",
                                    validation: {
                                      regex: "^[A-Za-z0-9 &'\\(\\)*,-\\.@£]{1,42}$",
                                      title:
                                        "42 characters allowed. Allowed characters are A-Za-z0-9&'()*,-.@£",
                                    },
                                    help_text: null,
                                  },
                                  answer: null,
                                },
                                {
                                  question: {
                                    question_key: "self-newpostcode",
                                    category: "Self Employed Business",
                                    question: "Old postcode",
                                    type: "Free text",
                                    sub_text:
                                      "If you have a separate address you run your self-employment from, provide this postcode. If not, then it is likely to be your home postcode.",
                                    parent_question: "self-newdetails",
                                    help_text: null,
                                  },
                                  answer: null,
                                },
                              ],
                            },
                          ],
                        },
                        answer: {
                          "self-detailchanges": true,
                        },
                      },
                      {
                        question: {
                          question_key: "self-sector",
                          category: "Self Employed Business",
                          question: "Your industry",
                          type: "Single Choice",
                          sub_text:
                            "Please select which one of the below options best describes your self-employment service.\n<p>If your business isn't listed, simply skip this question.</p>",
                          help_text:
                            "<h3> Why do we need to know this?</h3>\n<p>Knowing the sector of your self-employment enables us to provide <strong>industry specific insights</strong> to show you how you compare to similar professionals.\n<p>This allows us to streamline the process of your self-assessment and support you in the best way we can.</p>",
                          submit: "self_turnover",
                          choices: [
                            {
                              key: "__construction",
                              name: "Construction or trades",
                              icon: "construction.svg",
                            },
                            {
                              key: "__healthcare",
                              name: "Healthcare",
                              icon: "healthcare.svg",
                            },
                            {
                              key: "__content_creator",
                              name: "Content creator",
                              icon: "camera.svg",
                            },
                            {
                              key: "__health_fitness",
                              name: "Health and fitness",
                              icon: "dumbbells.svg",
                            },
                            {
                              key: "__musician",
                              name: "Musician",
                              icon: "music.svg",
                            },
                            {
                              key: "__freelancer",
                              name: "Freelancer or creative",
                              icon: "creative.svg",
                            },
                            {
                              key: "__teacher",
                              name: "Teacher or tutor",
                              icon: "teacher.svg",
                            },
                            {
                              key: "__courier",
                              name: "Courier Delivery",
                              icon: "delivery.svg",
                            },
                            {
                              key: "__taxi",
                              name: "Taxi Service",
                              icon: "taxi.svg",
                            },
                            {
                              key: "__food_delivery",
                              name: "Food Delivery",
                              icon: "scooter.svg",
                            },
                            {
                              key: "__retail",
                              name: "Retail",
                              icon: "tag.svg",
                            },
                            {
                              key: "__intro-sector_skip",
                              skip: true,
                              name: "Skip",
                            },
                          ],
                          required: true,
                        },
                        answer: ["__healthcare"],
                      },
                      {
                        question: {
                          question_key: "self_turnover",
                          category: "Self Employed Business",
                          question: "What were your earnings?",
                          type: "Numeric",
                          unit: "£",
                          sub_text:
                            "Please record the total amount that you received in the 2023/2024 tax year <strong>before</strong> any tax was paid.\n<p>The 2023-2024 tax year began on 6th April 2023 and ended on 5th April 2024.</p>",
                          help_text:
                            '<h3>Total earnings</h3>\n<p>If you\'re a subcontractor, make sure you include the full amount for the tax year you\'re filing for.</p>\n<p>This figure should be before any <strong>Construction Industry Scheme (CIS)</strong> deductions are made by contractors.</p>\n<hr />\n<p><strong>Please note:</strong> you should include the total amount of money that you <strong>received</strong> in the tax-year. If you record income based on invoices, (accruals basis), then please <a rel="noopener" href="https://www.taxd.co.uk/contact" target="_blank">get in touch</a> with the Taxd team."</p>',
                          submit: "self-workdays_multi",
                          required: true,
                        },
                        answer: 23,
                      },
                      {
                        question: {
                          question_key: "self-workdays_multi",
                          category: "Self Employed Business",
                          question:
                            "Were you based in the UK or perform all workdays in the UK for this income?",
                          type: "Boolean Multi",
                          submit: "self-startend",
                          sub_questions: [
                            {
                              boolean_key: "self-workdays_boolean",
                              show_on: false,
                              questions: ["self-workdays_percent"],
                            },
                          ],
                          display_rulesets_rule: "or",
                          display_rulesets: [
                            {
                              if_display_false: "self-startend",
                              priority: 1,
                              rules: [
                                {
                                  question_key: "Introduction.intro-taxyearoptions",
                                  operator: "contains one of",
                                  value: ["__resident_other_country", "__income_overseas"],
                                },
                              ],
                              type: "and",
                            },
                            {
                              if_display_false: "self-startend",
                              priority: 2,
                              rules: [
                                {
                                  question_key: "Introduction.intro-taxyearoptions",
                                  operator: "contains one of",
                                  value: ["__resident_other_country", "__income_overseas"],
                                },
                                {
                                  question_key: "non-resident",
                                  operator: "is",
                                  value: false,
                                },
                                {
                                  question_key: "Residence.complex-splityear",
                                  operator: "is",
                                  value: true,
                                },
                                {
                                  question_key: "Residence.complex-splittype",
                                  operator: "is",
                                  value: "__depart",
                                },
                              ],
                              type: "and",
                            },
                          ],
                          required: true,
                          sub_text: null,
                          help_text: null,
                          questionObjects: [
                            {
                              booleanQuestion: {
                                question: {
                                  question_key: "self-workdays_boolean",
                                  category: "Self Employed Business",
                                  type: "Boolean",
                                  parent_question: "self-workdays_multi",
                                  required: true,
                                  question: null,
                                  sub_text: null,
                                  help_text: null,
                                },
                                answer: true,
                              },
                              showOn: false,
                              questionObjects: [
                                {
                                  question: {
                                    question_key: "self-workdays_percent",
                                    category: "Self Employed Business",
                                    question:
                                      "What portion of this income was earned whilst you were outside of the UK?",
                                    type: "Numeric",
                                    unit: "%",
                                    parent_question: "self-workdays_multi",
                                    validation: {
                                      min: "0",
                                      max: 100,
                                      title: "Please enter a number between 0 and 100.",
                                    },
                                    required: true,
                                    sub_text: null,
                                    help_text: null,
                                  },
                                  answer: null,
                                },
                              ],
                            },
                          ],
                        },
                        answer: {
                          "self-workdays_boolean": true,
                        },
                      },
                      {
                        question: {
                          question_key: "self-startend",
                          category: "Self Employed Business",
                          question: "Did you start or cease trading during the tax year?",
                          type: "Multiple Choice",
                          sub_text:
                            "If this self-employment began in the 2023/2024 tax year then select <strong>started trading</strong>. \n<p>If you stopped this self-employment during the year, select <strong>ceased trading</strong>.</p>\n<p>You could also be in a position to select both options or neither.</p>",
                          submit: "self-accounting_period_multi",
                          choices: [
                            {
                              key: "__started_trading",
                              name: "Started Trading",
                              submit: "self-start",
                            },
                            {
                              key: "__ceased_trading",
                              name: "Ceased Trading",
                              submit: "self-end",
                            },
                            {
                              key: "__ceased_trading_skip",
                              name: "Neither",
                              skip: true,
                            },
                          ],
                          required: true,
                          help_text: null,
                        },
                        answer: ["__ceased_trading", "__started_trading"],
                      },
                      {
                        question: {
                          question_key: "self-start",
                          category: "Self Employed Business",
                          question: "When did you start trading?",
                          type: "Tax Year Date",
                          required: true,
                          sub_text: null,
                          help_text: null,
                          tax_year: "2023/2024",
                        },
                        answer: "2024-04-02T00:00:00.000Z",
                      },
                      {
                        question: {
                          question_key: "self-end",
                          category: "Self Employed Business",
                          question: "When did you cease trading?",
                          type: "Tax Year Date",
                          required: true,
                          sub_text: null,
                          help_text: null,
                          tax_year: "2023/2024",
                        },
                        answer: "2024-04-05T00:00:00.000Z",
                      },
                      {
                        question: {
                          question_key: "self-other_income_multi",
                          category: "Self Employed Business",
                          question: "Did you have any other income?",
                          type: "Boolean Multi",
                          sub_text:
                            "<p>For example, coronavirus support payments but not Self-Employment Income Support Scheme (SEISS) grants.</p>\n <p>This will be income that is not part of your main business. Consult <em>Help</em> icon for more information.</p>",
                          help_text:
                            "<h3>Other business income\n </h3>\n <p>Coronavirus support scheme payments are taxable and include payments from the Coronavirus Job Retention Scheme (CJRS), Eat Out to Help Out Scheme, any other applicable HMRC coronavirus support scheme, and payments you were entitled to receive from local authorities or devolved administrations. If you received coronavirus support scheme payments, include amount within the figure for this question.</p>\n <p>Also include income which constitutes trading income but is not included in your turnover. For example, income from letting part of your business accommodation, payments for the right to cross your land, length reverse premiums and amounts treated as profit by the trading income provided through third party rules.</p>\n <p> Do not include income from another trade or business. You will have the option to add another self-employment later.</p>",
                          submit: "self-cis_multi",
                          sub_questions: [
                            {
                              boolean_key: "self-other_income",
                              show_on: true,
                              questions: ["self-other_income_amount"],
                            },
                          ],
                          required: true,
                          questionObjects: [
                            {
                              booleanQuestion: {
                                question: {
                                  question_key: "self-other_income",
                                  category: "Self Employed Business",
                                  question: "Did you have any other income?",
                                  type: "Boolean",
                                  sub_text:
                                    "<p>For example, coronavirus support payments but not Self-Employment Income Support Scheme (SEISS) grants.</p>\n <p>This will be income that is not part of your main business. Consult <em>Help</em> icon for more information.</p>",
                                  help_text:
                                    "<h3>\n Other business income\n </h3>\n <p>Coronavirus support scheme payments are taxable and include payments from the Coronavirus Job Retention Scheme (CJRS), Eat Out to Help Out Scheme, any other applicable HMRC coronavirus support scheme, and payments you were entitled to receive from local authorities or devolved administrations. If you received coronavirus support scheme payments, include amount within the figure for this question.</p>\n <p>Also include income which constitutes trading income but is not included in your turnover. For example, income from letting part of your business accommodation, payments for the right to cross your land, non-arm's length reverse premiums and amounts treated as profit by the trading income provided through third party rules.</p>\n <p> Do not include income from another trade or business. You will have the option to add another self-employment later.</p>",
                                  parent_question: "self-other_income_multi",
                                  required: true,
                                },
                                answer: false,
                              },
                              showOn: true,
                              questionObjects: [
                                {
                                  question: {
                                    question_key: "self-other_income_amount",
                                    category: "Self Employed Business",
                                    question: "How much other income, did you earn?",
                                    type: "Numeric",
                                    unit: "£",
                                    parent_question: "self-other_income_multi",
                                    required: true,
                                    sub_text: null,
                                    help_text: null,
                                  },
                                  answer: null,
                                },
                              ],
                            },
                          ],
                        },
                        answer: {
                          "self-other_income": false,
                        },
                      },
                      {
                        question: {
                          question_key: "self-expense_intro",
                          category: "Self Employed Business",
                          question: "Did you have any expenses?",
                          type: "Boolean",
                          sub_text:
                            "Expenses cover anything you need to buy in order to carry out your work.\n<p>This can include transport costs, office supplies and phone bills.</p>",
                          if_true: "self-phone_multi",
                          if_false: "self-seis_multi",
                          required: true,
                          help_text: null,
                        },
                        answer: true,
                      },
                      {
                        question: {
                          question_key: "self-phone_multi",
                          category: "Self Employed Business",
                          question: "Do you use a phone for work?",
                          type: "Boolean Multi",
                          sub_text:
                            "Some of the costs incurred by using a phone can be claimed as an expense.",
                          submit: "self-wfh",
                          sub_questions: [
                            {
                              boolean_key: "self-phone",
                              show_on: true,
                              questions: ["self-phone_cost", "self-phone_percent"],
                            },
                          ],
                          required: true,
                          help_text: null,
                          questionObjects: [
                            {
                              booleanQuestion: {
                                question: {
                                  question_key: "self-phone",
                                  category: "Self Employed Business",
                                  question: "Do you use a phone for work?",
                                  type: "Boolean",
                                  sub_text:
                                    "Even if you use it partly for work, we can take a portion of the costs.",
                                  help_text:
                                    "<h3>\n Phone Costs\n </h3>\n <p><b>\n-Purchase of a phone<br>\n-monthly contract costs<br>\n-maintenance and repair costs</p>\n<p>Can all be included as a deductible expense.<br><br><b>I partly use my phone for work...<br></b>Even if you use a personal phone for work, you can expense part of the costs if you are using the phone for work. As an example, if your usage of the phone is split 50/50 between work and personal, you can claim 50% of the costs.",
                                  parent_question: "self-phone_multi",
                                  required: true,
                                },
                                answer: false,
                              },
                              showOn: true,
                              questionObjects: [
                                {
                                  question: {
                                    question_key: "self-phone_cost",
                                    category: "Self Employed Business",
                                    question: "Phone costs",
                                    type: "Numeric",
                                    unit: "£",
                                    sub_text:
                                      "Total phone cost + contract tariff within the tax year",
                                    parent_question: "self-phone_multi",
                                    required: true,
                                    help_text: null,
                                  },
                                  answer: null,
                                },
                                {
                                  question: {
                                    question_key: "self-phone_percent",
                                    category: "Self Employed Business",
                                    question: "Percentage used for work",
                                    type: "Numeric",
                                    unit: "%",
                                    sub_text: "(100% = only used for work)",
                                    help_text:
                                      "<h3>Working out percentages</h3>\n<p>We understand that you may not have recorded the exact amount of time you spend doing work on your phone, so an accurate estimate is fine.</p>\n<h4>For example</h4>\n<p>Polly uses her phone 20 hours per week. 10 of these hours are for work , so <strong>50%</strong> of the time is for work.</p>",
                                    parent_question: "self-phone_multi",
                                    validation: {
                                      min: "0",
                                      max: 100,
                                      title: "Please enter a value between 0 and 100.",
                                    },
                                    required: true,
                                  },
                                  answer: null,
                                },
                              ],
                            },
                          ],
                        },
                        answer: {
                          "self-phone": false,
                        },
                      },
                      {
                        question: {
                          question_key: "self-wfh",
                          category: "Self Employed Business",
                          question: "Is your main office at home?",
                          type: "Boolean",
                          sub_text:
                            "You may work full-time or simply do weekly admin at home.\n<p>Either way, it's important to claim back what you can!</p>",
                          help_text:
                            "<h3>Working from home</h3>\n<p>For many self-employed individuals, home is also used as an office for work. Whether you work a couple of hours a week or spend the majority of your time here, it's important to record this in order to maximise your deductions.</p>\n<p><strong>There are 2 ways of calculating these deductions:</strong></p>\n<p><strong>1. Flat Rate</strong></p>\n<p>Based on the number of hours you work in your home per month, we can take a flat deduction.</p>\n<p><strong>2. Apportioned</strong></p>\n<p>Based on the amount you spend on bills and the time you work in your home office, we can calculate the deduction.</p>\n<hr />\n<p>Either way, we'll help you pick the most efficient route, depending on what you tell us.</p>",
                          if_true: "self-wfh_flat_rate",
                          if_false: "self-drive",
                          required: true,
                        },
                        answer: true,
                      },
                      {
                        question: {
                          question_key: "self-wfh_flat_rate",
                          category: "Self Employed Business",
                          question:
                            "On average, how many hours did you work from home every month?",
                          type: "Numeric",
                          unit: "hours",
                          sub_text:
                            "We will apply the <strong>HMRC compliant deduction</strong> based on the number of hours you worked from home.",
                          help_text:
                            "<h3>Flat-rate allowance</h3>\n<p>Using the flat-rate method, you can receive a deduction based on the number of hours worked at home every month.</p>\n<h4>For example</h4>\n<ul>\n<li>25-50 hours = £10 per month</li>\n<li>51-100 hours = £18 per month</li>\n<li>101 hours or more = £26 per month</li>\n</ul>",
                          submit: "self-efficient",
                          display_rulesets: [
                            {
                              if_display_false: "self-wfh_apportion_costs",
                              rules: [
                                {
                                  question_key:
                                    "Self Employed.Self Employed Business.self-wfh_type",
                                  operator: "is not",
                                  value: "__apportion_costs",
                                },
                              ],
                              type: "and",
                            },
                          ],
                          required: true,
                        },
                        answer: 12,
                      },
                      {
                        question: {
                          question_key: "self-efficient",
                          category: "Self Employed Business",
                          question: "Claim tax relief for your home bills",
                          type: "Boolean",
                          sub_text:
                            "You can claim back a proportion of your home bills if you work from home.\n<p>This section takes a little more time so you can revisit it at a later point if you'd like.</p>",
                          if_true: "self-wfh_apportion_costs",
                          if_false: "self-drive",
                          required: true,
                          help_text: null,
                        },
                        answer: false,
                      },
                      {
                        question: {
                          question_key: "self-drive",
                          category: "Self Employed Business",
                          question: "Did you drive for your work?",
                          type: "Boolean",
                          sub_text:
                            "This includes travelling to customers or sites, collecting equipment and any other miles you covered in order to carry out your job.\n<p><i>Check the help text for more examples.</i></p>",
                          help_text:
                            "<h3>Using your car for work</h3>\n<h4>Examples of this include:</h4>\n<ul>\n<li>Driving to/from client sites from home</li>\n<li>Travelling between multiple work locations</li>\n<li>Meeting a colleague for a business dinner, event or meeting</li>\n</ul>\n<h4>This <strong>doesn't</strong> include:</h4>\n<ul>\n<li>Driving from home to your office or workspace</li>\n<li>Driving to private appointments</li>\n<li>Using your car for social events that do not involve work</li>\n</ul>",
                          if_true: "self-driver-vehicletype",
                          if_false: "self-expense_row",
                          required: true,
                        },
                        answer: false,
                      },
                      {
                        question: {
                          question_key: "self-expense_row",
                          category: "Self Employed Business",
                          question: "Further expense costs based on your industry",
                          type: "Expenses",
                          sub_text:
                            '<p>Please provide us with as many of your expenses as possible. These can be anything from equipment costs to marketing budgets.</p>\n<p>If you make a loss, this can be carried forward - click on the <strong>help</strong> icon for more information. If your expenses are under £1,000, we will apply a £1,000 <a rel="noopener" href="https://www.gov.uk/guidance/tax-free-allowances-on-property-and-trading-income#trade" target="_blank" data-anchor="#trade">trading allowance</a> instead.</p>',
                          help_text:
                            "<h3><span>Expenses Information</span></h3>\n<p><span>If your total expenses are higher than your earnings, you will be making a loss which can be taken off a future profit.</span></p>\n<h4><span>For example</span></h4>\n<p><span> Sarah makes <strong>£5,000</strong> in the tax year 2021-22 but has expenses of <strong>£7,000</strong>. This creates a <strong>£2,000</strong> loss. </span></p>\n<p><span>However, Sarah makes <strong>£10,000</strong> in the tax year 2022-23 and has expenses of <strong>£5,000</strong>. This is a <strong>£5,000</strong> profit. This profit will be lowered by <strong>£2,000</strong> due to the expenses from the previous year, which will create a taxable profit of <strong>£3,000</strong>.</span></p>",
                          submit: "self-allowance-car",
                          choices: [
                            {
                              key: "__self-expense_phone",
                              name: "Stationery and office costs",
                            },
                            {
                              key: "__self-expense_travel",
                              name: "Travel",
                            },
                            {
                              key: "__self-healthcare_equipment",
                              name: "Equipment e.g. Theatre shoes, stethoscope",
                            },
                            {
                              key: "__self-expense_uniform",
                              name: "Clothing and uniform expenses",
                            },
                            {
                              key: "__self-expense_rent",
                              name: "Rent, rates, power and insurance",
                            },
                            {
                              key: "__self-expense_website",
                              name: "Website design, build and hosting",
                            },
                            {
                              key: "__self-healthcare_association",
                              name: "Medical Association / Groups",
                            },
                            {
                              key: "__self-expense_goods",
                              name: "Goods bought for resale",
                            },
                            {
                              key: "__self-healthcare_exams",
                              name: "Study and Exam Fees",
                            },
                            {
                              key: "__self-expense_repair",
                              name: "Repairs and maintenance of property and equipment",
                            },
                            {
                              key: "__self-expense_wages",
                              name: "Wages and Staffing",
                            },
                            {
                              key: "__self-expense_charges",
                              name: "Interest, bank and credit card financial charges",
                            },
                            {
                              key: "__self-expense_marketing",
                              name: "Advertising or marketing costs",
                            },
                            {
                              key: "__self-expense_laptop",
                              name: "Laptop",
                            },
                            {
                              key: "__self-expense_other",
                              name: "Other",
                            },
                            {
                              key: "__self-expense_fees",
                              name: "Professional fees (accountancy and legal)",
                            },
                            {
                              key: "__self-expense_training",
                              name: "Training course costs",
                            },
                            {
                              key: "__self-expense_insurance",
                              name: "Insurance",
                            },
                            {
                              key: "__self-expense_software",
                              name: "License, software and subscriptions",
                            },
                          ],
                          required: false,
                        },
                        answer: [
                          {
                            __type: "__self-expense_phone",
                            __amount: 23,
                          },
                        ],
                      },
                      {
                        question: {
                          question_key: "self-allowance-car",
                          category: "Self Employed Business",
                          question: "Have you bought (or sold) a car for your business recently?",
                          type: "Boolean",
                          sub_text:
                            "If you have purchased a car for your self-employment, you can deduct some of the costs as a <strong>capital allowance</strong>. \n<p>If you have sold a car that you previously claimed for, Taxd will help to make the balancing adjustment required for the tax return.</p>",
                          help_text:
                            "<h3>Vehicles and capital allowance</h3>\n<p>You can claim <strong>capital allowances</strong> on cars you buy and use for your business. This means you can deduct part of the value from your profits before you pay tax. </p>\n<p>Do remember that any percentage relating to personal use needs to be adjusted for.</p>",
                          if_true: "self-allowance-car_multi",
                          if_false: "self-personal_multi",
                          required: true,
                        },
                        answer: true,
                      },
                      {
                        question: {
                          question_key: "self-allowance-car_multi",
                          category: "Self Employed Business",
                          question: "Details about your car",
                          type: "Row",
                          submit: "self-personal_multi",
                          sub_questions: [
                            "self-allowance-car_buysell",
                            "self-allowance-car_age",
                            "self-allowance-car_date",
                            "self-allowance-car_selldate",
                            "self-allowance-car_purchaseprice",
                            "self-allowance-car_saleprice",
                            "self-allowance-car_co2",
                            "self-allowance-car_personaluse",
                          ],
                          row_title_question: "self-allowance-car_buysell",
                          required: true,
                          sub_text: null,
                          help_text: null,
                          questionObjects: [
                            {
                              question: {
                                question_key: "self-allowance-car_buysell",
                                category: "Self Employed Business",
                                question: "Buy/sell",
                                type: "List",
                                choices: [
                                  {
                                    key: "__buy",
                                    name: "Buy",
                                  },
                                  {
                                    key: "__sell",
                                    name: "Sell",
                                  },
                                ],
                                parent_question: "self-allowance-car_multi",
                                required: true,
                                sub_text: null,
                                help_text: null,
                              },
                              answer: null,
                            },
                            {
                              question: {
                                question_key: "self-allowance-car_age",
                                category: "Self Employed Business",
                                question: "Car type",
                                type: "List",
                                choices: [
                                  {
                                    key: "__new",
                                    name: "Brand new",
                                  },
                                  {
                                    key: "__used",
                                    name: "Second hand",
                                  },
                                ],
                                parent_question: "self-allowance-car_multi",
                                row_data_label: "Car type",
                                required: true,
                                sub_text: null,
                                help_text: null,
                              },
                              answer: null,
                            },
                            {
                              question: {
                                question_key: "self-allowance-car_date",
                                category: "Self Employed Business",
                                question: "Purchase date",
                                type: "Date",
                                parent_question: "self-allowance-car_multi",
                                row_data_label: "Date bought",
                                display_rulesets: [
                                  {
                                    rules: [
                                      {
                                        question_key: "self-allowance-car_buysell",
                                        operator: "is",
                                        value: "__buy",
                                      },
                                    ],
                                    type: "and",
                                  },
                                ],
                                sub_text: null,
                                help_text: null,
                                tax_year: "2023/2024",
                              },
                              answer: null,
                            },
                            {
                              question: {
                                question_key: "self-allowance-car_selldate",
                                category: "Self Employed Business",
                                question: "Sale date",
                                type: "Tax Year Date",
                                parent_question: "self-allowance-car_multi",
                                row_data_label: "Sale date",
                                display_rulesets: [
                                  {
                                    rules: [
                                      {
                                        question_key: "self-allowance-car_buysell",
                                        operator: "is",
                                        value: "__sell",
                                      },
                                    ],
                                    type: "and",
                                  },
                                ],
                                sub_text: null,
                                help_text: null,
                                tax_year: "2023/2024",
                              },
                              answer: null,
                            },
                            {
                              question: {
                                question_key: "self-allowance-car_purchaseprice",
                                category: "Self Employed Business",
                                question: "Purchase price",
                                type: "Numeric",
                                unit: "£",
                                parent_question: "self-allowance-car_multi",
                                row_data_label: "Bought price",
                                display_rulesets: [
                                  {
                                    rules: [
                                      {
                                        question_key: "self-allowance-car_buysell",
                                        operator: "is",
                                        value: "__buy",
                                      },
                                    ],
                                    type: "and",
                                  },
                                ],
                                required: true,
                                sub_text: null,
                                help_text: null,
                              },
                              answer: null,
                            },
                            {
                              question: {
                                question_key: "self-allowance-car_saleprice",
                                category: "Self Employed Business",
                                question: "Sale price",
                                type: "Numeric",
                                unit: "£",
                                parent_question: "self-allowance-car_multi",
                                row_data_label: "Sale price",
                                display_rulesets: [
                                  {
                                    rules: [
                                      {
                                        question_key: "self-allowance-car_buysell",
                                        operator: "is",
                                        value: "__sell",
                                      },
                                    ],
                                    type: "and",
                                  },
                                ],
                                required: true,
                                sub_text: null,
                                help_text: null,
                              },
                              answer: null,
                            },
                            {
                              question: {
                                question_key: "self-allowance-car_co2",
                                category: "Self Employed Business",
                                question: "CO2 emissions in g/km",
                                type: "List",
                                choices: [
                                  {
                                    key: "__zero",
                                    name: "0g/km",
                                  },
                                  {
                                    key: "__fifty",
                                    name: "50g/km or less",
                                  },
                                  {
                                    key: "__oneten",
                                    name: "110g/km or less",
                                  },
                                  {
                                    key: "__onethirty",
                                    name: "130 or less",
                                  },
                                  {
                                    key: "__onesixty",
                                    name: "160g/km or less",
                                  },
                                  {
                                    key: "__onesixone",
                                    name: "161+",
                                  },
                                ],
                                parent_question: "self-allowance-car_multi",
                                row_data_label: "Emissions",
                                required: true,
                                sub_text: null,
                                help_text: null,
                              },
                              answer: null,
                            },
                            {
                              question: {
                                question_key: "self-allowance-car_personaluse",
                                category: "Self Employed Business",
                                question: "Personal usage",
                                type: "Numeric",
                                unit: "%",
                                parent_question: "self-allowance-car_multi",
                                row_data_label: "Personal use",
                                validation: {
                                  min: "0",
                                  max: 100,
                                  title: "Please enter a value between 0 and 100.",
                                },
                                required: true,
                                sub_text: null,
                                help_text: null,
                              },
                              answer: null,
                            },
                          ],
                        },
                        answer: [],
                      },
                    ],
                    status: "Incomplete",
                    categoryExtras: {
                      name: "Self Employed Business",
                      start: "self-intro_multi",
                      child_name: "self-intro_multi.self-name",
                      parent_category: "Self Employed",
                      parent_question: "self-addnew",
                    },
                    progressBarLength: 35,
                    progressBarIndex: -1,
                  },
                  summary: {
                    title: "Jayanta garu",
                    subtext:
                      "This self-employment still has some answers left to complete before we can provide you with a complete summary!",
                    data: [],
                  },
                },
              ],
            },
          ],
          status: "Incomplete",
          categoryExtras: {
            name: "Self Employed",
            start: "self-addnew",
          },
          intro:
            "<p>So you&apos;re self-employed, you are your own boss!</p>\n            <br />\n            <h3>How can I maximise my tax efficiency here?</h3>\n            <br />\n            <br />\n            <p>\n                We&apos;ll ensure you are tax efficient, by asking you about expenses that are common in your\n                industry.You likely use a car, phone or home for work purposes. We&apos;ll ask you about this and pick\n                the most tax efficient route for you.\n            </p>\n            <br />\n            <h3>Make sure to have these handy...</h3>\n            <br />\n            <br />\n            <ul>\n                <li>Earnings</li>\n                <li>Details of travel (mileage or car costs)</li>\n                <li>Expenses, we&apos;ll ask you about your industry so that we suggest ones specific to your role!</li>\n            </ul>\n            <br />\n\n            <p>If you track your earnings on a spreadsheet or app, keep this to hand.</p>\n            <p>\n                Feel free to get in touch with the Taxd team if you have any questions about what you can, or cannot\n                expense!\n            </p>",
          progressBarLength: 1,
          progressBarIndex: 0,
        },
        Partnership: {
          questionFlow: [
            {
              question: {
                question_key: "partnership-addnew",
                category: "Partnership",
                question: "Select 'Add New' to add a Partnership below",
                type: "Array",
                child_category: "Partnership Business",
                required: true,
                sub_text: null,
                help_text: null,
              },
              answer: [
                {
                  id: "664193f4c9dd27d5a9a311ef",
                  result: {
                    questionFlow: [
                      {
                        question: {
                          question_key: "partnership-intro_multi",
                          category: "Partnership Business",
                          question: "We'd love to get to know more about your partnership!",
                          type: "Multi Q",
                          sub_text: "Could you please provide us with some initial information?",
                          submit: "partnership-join_leave",
                          sub_questions: [
                            "partnership-name",
                            "partnership-reference_no",
                            "partnership-description",
                          ],
                          required: true,
                          help_text: null,
                          questionObjects: [
                            {
                              question: {
                                question_key: "partnership-name",
                                category: "Partnership Business",
                                question: "What is the partnership name",
                                type: "Free Text",
                                parent_question: "partnership-intro_multi",
                                required: true,
                                sub_text: null,
                                help_text: null,
                              },
                              answer: null,
                            },
                            {
                              question: {
                                question_key: "partnership-reference_no",
                                category: "Partnership Business",
                                question: "What's the UTR number for your partnership?",
                                type: "UTR",
                                parent_question: "partnership-intro_multi",
                                validation: {
                                  regex: "^[0-9]{10}$",
                                  title:
                                    "The format is a unique set of 10 numbers allocated automatically by HMRC for both individuals and entities who have to submit a tax return.",
                                },
                                required: true,
                                sub_text: null,
                                help_text: null,
                              },
                              answer: null,
                            },
                            {
                              question: {
                                question_key: "partnership-description",
                                category: "Partnership Business",
                                question:
                                  "And could you give us a brief description of what your partnership does?",
                                type: "Free Text",
                                parent_question: "partnership-intro_multi",
                                validation: {
                                  regex: "^[A-Za-z0-9 &'\\(\\)*,-\\.@£]{1,28}$",
                                  title: "HMRC restricts the description to 28 characters.",
                                },
                                required: true,
                                sub_text: null,
                                help_text: null,
                              },
                              answer: null,
                            },
                          ],
                        },
                        answer: {},
                      },
                    ],
                    status: "Not Started",
                    categoryExtras: {
                      name: "Partnership Business",
                      start: "partnership-intro_multi",
                      child_name: "partnership-intro_multi.partnership-name",
                      parent_category: "Partnership",
                      parent_question: "partnership-addnew",
                    },
                    progressBarLength: 12,
                    progressBarIndex: -1,
                  },
                  summary: {
                    title: "Incomplete partnership",
                    data: [
                      {
                        label: "Partnership reference no",
                        value: null,
                      },
                      {
                        label: "Share of profits",
                        value: "-",
                      },
                    ],
                  },
                },
              ],
            },
          ],
          status: "Incomplete",
          categoryExtras: {
            name: "Partnership",
            start: "partnership-addnew",
          },
          intro:
            "<p>\n                Awesome! It's great to hear that you were a partner in a partnership during the tax year. In this section of the questionnaire, we'll be asking you for the necessary details to complete the required Self Assessment fields.\n            </p>\n            <br />\n            <br />\n            <p>\n                To help us with this, we'll need to gather some information about your partnership business, so be prepared to answer a few questions. It's always a good idea to have a copy of the Partnership Tax Return that includes a summary of your earnings on the Partnership Statement, as this can make things easier for you.\n            </p>\n            <br />\n            <br />\n            <p>\n                And don't worry if you're unsure about anything - we're here to guide you through the process and make sure that your tax return is completed accurately and efficiently.\n            </p>",
          progressBarLength: 1,
          progressBarIndex: 0,
        },
        "Credits and Deductions": {
          questionFlow: [
            {
              question: {
                question_key: "credit-intro",
                category: "Credits and Deductions",
                question: "Which of the following apply to you?",
                type: "Multiple Choice",
                sub_text: "Consult the <strong>help icon</strong> for more information.",
                help_text:
                  "<h3>Private pension contributions</h3>\n<p>If you have a pension outside of your employment, these contributions may be subject to additional tax saving. This is achieved by extending your basic rate band. Essentially, if you pay tax at 40% or 45%, you will get 20% and 25% as a refund respectively. In most instances, a 20% relief is given at the time of payment when the pension provider \"grosses up\" the contribution you make by 25%.</p>\n<p>If this is applicable to you, please select the appropriate options so we can get the details and ensure you get the correct treatment.</p>\n<h4>Charitable giving</h4>\n<p>Similar to the above, charitable contributions are treated in the same way. If you gave to charity throughout the year, please select the option and we will make sure you get the full tax benefits.</p>\n<p>Note that donations would need to have been made in the following ways:</p>\n<ul>\n<li>Through Gift Aid</li>\n<li>Through a Payroll Giving scheme (straight from your wages or pension)</li>\n<li>Land, property or shares</li>\n</ul>\n<h4>Blind Person Allowance</h4>\n<p>The Blind Person's Allowance of <strong>£2,500</strong> in 2020/21 can be added to your yearly Personal Allowance. The Personal Allowance is the amount of money you can earn before you start paying Income Tax.</p>\n<p>To be eligible to claim, you must be located in England or Wales and:</p>\n<ul>\n<li>Be registered with your local council as blind or severely sight impaired</li>\n<li>Have a certificate that says you're blind or severely sight impaired, (or a similar document from your doctor)</li>\n</ul>\n<p>If you're in Scotland or Northern Ireland, you must:</p>\n<ul>\n<li>Be unable to carry out work in which eyesight is essential</li>\n<li>Have a certificate that says you're blind or severely sight impaired, (or a similar document from your doctor)</li>\n</ul>\n<h4>Marriage Allowance</h4>\n<p>Married couples can elect to transfer <strong>£1,260</strong> of their Personal Allowance to their spouse if they don't use it themselves. This would result in a tax saving of £252.</p>\n<p>To get this saving, the following conditions need to apply:</p>\n<ul>\n<li>You're married or in a civil partnership</li>\n<li>You don't pay Income Tax or your income is below your Personal Allowance (£12,000 for 2023/2024)</li>\n<li>Your partner pays Income Tax at the basic rate (an income between £12,501 and £50,000 for 2023/2024)</li>\n</ul>\n<p>You cannot claim Marriage Allowance if you're living together and you're not married or in a civil partnership.</p>\n<h4>Unique Occupational Scheme not deducted before tax</h4>\n<p>For almost all employees who make pension contributions to an occupational pension scheme, (a pension through their work), the contribution is taken off their salary before they pay tax. Essentially, the tax benefit is received at the source.</p>\n<p>In some rare occasions, despite an employee making contributions, their salary may be taxed from the gross amount - this is the figure they are paid before tax and pension payments.</p>",
                choices: [
                  {
                    key: "__pension_payments_ooe",
                    name: "Private pension (SIPP)",
                    submit: "pension-addanother",
                  },
                  {
                    key: "__charitable_giving",
                    name: "Charitable Giving",
                    submit: "gifts-add",
                  },
                  {
                    key: "__blind_personal_allowance",
                    name: "Blind Person Allowance",
                    submit: "blind-registered_multi",
                  },
                  {
                    key: "__marriage_allowance",
                    name: "Marriage allowance",
                    submit: "marriage-transfer",
                  },
                  {
                    key: "__employer_pension_scheme",
                    name: "Unique Occupational Scheme",
                    submit: "pension-employer_multi",
                  },
                  {
                    key: "__venture_capital_scheme",
                    name: "Venture Capital Schemes",
                    submit: "venture-row",
                  },
                  {
                    key: "__overseas_pension_payments",
                    name: "Overseas pension contributions",
                    submit: "credits-overseas",
                  },
                  {
                    key: "__credit-intro_skip",
                    skip: true,
                    name: "None",
                  },
                ],
                required: true,
              },
              answer: [
                "__pension_payments_ooe",
                "__charitable_giving",
                "__blind_personal_allowance",
                "__marriage_allowance",
                "__employer_pension_scheme",
                "__venture_capital_scheme",
                "__overseas_pension_payments",
              ],
            },
            {
              question: {
                question_key: "pension-addanother",
                category: "Credits and Deductions",
                question: "Self-invested personal pension (SIPP)",
                type: "Row",
                sub_text:
                  "You should receive an annual statement from your pension provider with the below details. Consult the <strong>help icon</strong> for more information.",
                help_text:
                  "<h3>Type of scheme</h3>\n<p>A registered pension scheme is defined in the tax legislation as a scheme that can provide benefits to a person in any of the following circumstances:</p>\n<ul>\n<li>Retirement</li>\n<li>Death</li>\n<li>Having reached a particular age</li>\n<li>Serious ill-health or incapacity</li>\n<li>Similar circumstances</li>\n</ul>\n<p>A retirement annuity contract (RAC) is a formal name for a personal pension. An RAC is a particular type of insurance contract approved by HMRC to allow tax relief on contributions made by an individual.</p>\n<p>The type of scheme should be clear on your annual statement with your provider.</p>\n<h4>Name of pension provider</h4>\n<p>This information is not passed to HMRC, but is useful for you to keep track throughout our Self Assessment process.</p>\n<h4>Pension payments</h4>\n<p>Enter the amount that you had contributed to your pension scheme over the tax year.</p>",
                sub_questions: [
                  "pension-name",
                  "pension-type",
                  "pension-payments",
                  "pension-one_off",
                ],
                row_title_question: "pension-name",
                required: true,
                questionObjects: [
                  {
                    question: {
                      question_key: "pension-name",
                      category: "Credits and Deductions",
                      question: "Pension provider name",
                      type: "Free text",
                      parent_question: "pension-addanother",
                      required: true,
                      sub_text: null,
                      help_text: null,
                    },
                    answer: null,
                  },
                  {
                    question: {
                      question_key: "pension-type",
                      category: "Credits and Deductions",
                      question: "Pension type",
                      type: "Single Choice",
                      choices: [
                        {
                          key: "__registered_pension",
                          name: "Registered pension",
                        },
                        {
                          key: "__retirement_annuity",
                          name: "Retirement annuity contract",
                        },
                      ],
                      parent_question: "pension-addanother",
                      row_data_label: "Type of pension",
                      required: true,
                      sub_text: null,
                      help_text: null,
                    },
                    answer: null,
                  },
                  {
                    question: {
                      question_key: "pension-payments",
                      category: "Credits and Deductions",
                      question: "Tax year contributions",
                      type: "Numeric",
                      unit: "£",
                      validation: {
                        min: 1,
                        title: "Please enter a value above 0",
                      },
                      parent_question: "pension-addanother",
                      row_data_label: "Tax year contributions",
                      required: true,
                      sub_text: null,
                      help_text: null,
                    },
                    answer: null,
                  },
                  {
                    question: {
                      question_key: "pension-one_off",
                      category: "Credits and Deductions",
                      question: "Of the total above - what is the amount of one off payments made",
                      sub_text:
                        "Ignore this field if all your pension payments were made on a consistent basis. HMRC will not adjust your tax code for one off payments.",
                      type: "Numeric",
                      unit: "£",
                      parent_question: "pension-addanother",
                      row_data_label: "One off contributions",
                      help_text: null,
                    },
                    answer: null,
                  },
                ],
              },
              answer: [
                {
                  "pension-name": "dqwqw",
                  "pension-type": "__registered_pension",
                  "pension-payments": 1213,
                  "pension-one_off": 12312,
                  _id: "6641f0b064328b6e5a3ef2ce",
                },
                {
                  "pension-name": "ddsd",
                  "pension-type": "__registered_pension",
                  "pension-payments": 232434,
                  "pension-one_off": 32342,
                  _id: "6641f0b064328b6e5a3ef2cf",
                },
              ],
            },
            {
              question: {
                question_key: "gifts-add",
                category: "Credits and Deductions",
                question: "What were your charitable contributions?",
                type: "Row",
                sub_text:
                  "<p>Charitable contributions can help improve your tax position. Please let us know the total value donated for each recipient during the tax year.</p>\n <p>Consult the <strong>help icon</em> for more information on whether your donation qualifies.</p>",
                help_text:
                  "<h3>Types of donation</h3>\n<h4>Cash (Gift Aid)</h4>\n<p>Gift Aid is a tax relief for gifts of money to charities and CASCs. If you pay tax at a rate above the basic rate, you are entitled to additional tax relief. Our Taxd calculation works this out for you.</p>\n<h4>Shares</h4>\n<p>You can claim tax relief for any qualifying shares and securities gifted, or sold at less than their market value to charities.</p>\n<p>Qualifying shares and securities include:</p>\n<ul>\n<li>Those listed on a recognised stock exchange or dealt in on a designated market in the UK</li>\n<li>Units in an authorised unit trust</li>\n<li>Shares in an open-ended investment company</li>\n<li>An interest in an offshore fund</li>\n</ul>\n<h4>Land and buildings</h4>\n<p>You can claim tax relief for any gift or sale at less than market value, of a qualifying interest in land. That is, the whole of your beneficial interest in that freehold or leasehold land in the UK.</p>\n<h3>Type of cash payment</h3>\n<h4>Payroll</h4>\n<p>Payroll Giving is a way of giving money to charity without paying tax on it. It must be paid through PAYE from wages or pension.</p>\n<p>Your employer needs to set up and run the scheme. The amount of tax relief you get depends on the rate of tax you pay.</p>\n<h4>One-off</h4>\n<p>If you had given money to charity on a certain date or time without signing up to make future payments, this would be considered a one-off transaction.</p>\n<h4>Direct debit</h4>\n<p>If you have signed up to monthly charity payments through direct debit, enter the total amount that you have donated across the tax year.</p>",
                sub_questions: [
                  "gifts-name",
                  "gifts-country",
                  "gifts-type",
                  "gifts-payroll",
                  "gifts-amount",
                ],
                row_title_question: "gifts-name",
                display_rulesets: [
                  {
                    rules: [
                      {
                        question_key: "Credits and Deductions.credit-intro",
                        operator: "contains",
                        value: "__charitable_giving",
                      },
                    ],
                    type: "and",
                  },
                ],
                required: true,
                questionObjects: [
                  {
                    question: {
                      question_key: "gifts-name",
                      category: "Credits and Deductions",
                      question: "Who was the recipient?",
                      type: "Free text",
                      sub_text: "Provide the name of the charity.",
                      parent_question: "gifts-add",
                      validation: {
                        regex: "^[A-Za-z0-9 &'\\(\\)*,-.@£]{1,40}$",
                        title: "Please enter a valid recipient name",
                      },
                      required: true,
                      help_text: null,
                    },
                    answer: null,
                  },
                  {
                    question: {
                      question_key: "gifts-country",
                      category: "Credits and Deductions",
                      question: "UK-based charity",
                      type: "Boolean",
                      sub_text:
                        "To qualify for tax relief, HMRC will need additional details about the charity. For example, if this donation was made to a non-UK charity.",
                      parent_question: "gifts-add",
                      row_data_label: "UK-based charity",
                      required: true,
                      help_text: null,
                    },
                    answer: null,
                  },
                  {
                    question: {
                      question_key: "gifts-type",
                      category: "Credits and Deductions",
                      question: "Donation Type",
                      type: "Single Choice",
                      sub_text:
                        "Consult the <em>Help</em> for more information on whether your donation qualifies.",
                      help_text:
                        "<h3> \nTypes of donation \n</h3> \n<p> \n<h4>Cash (Gift Aid)</h4> \nGift Aid is a tax relief for gifts of money to charities and CASCs. If you pay tax at a rate above the basic rate, you are entitled to additional tax relief. Our Taxd calculation works this out for you.</p> \n<h4>Shares</h4> \n<p>You can claim tax relief for any qualifying shares and securities gifted, or sold at less than their market value, to charities.</p> \n<p>Qualifying shares and securities include: \n<ul> \n<li>Those listed on a recognised stock exchange or dealt in on a designated market in the UK;</li> \n<li>Units in an authorised unit trust;</li> \n<li>Shares in an open-ended investment company; or</li> \n<li>An interest in an offshore fund.</li> \n</ul> \n<h4>Land and buildings</h4> \n<p>You can claim tax relief for any gift or sale at less than market value, of a <em>qualifying interest in land</em>. That is, the whole of your beneficial interest in that freehold or leasehold land in the UK.</p> \n</p>",
                      choices: [
                        {
                          key: "__cash_gift_aid",
                          name: "Cash (Gift Aid)",
                          submit: "gifts-payroll",
                        },
                        {
                          key: "__shares",
                          name: "Shares",
                          submit: "gifts-amount",
                        },
                        {
                          key: "__land_buildings",
                          name: "Land and Buildings",
                          submit: "gifts-amount",
                        },
                      ],
                      parent_question: "gifts-add",
                      row_data_label: "Donation Type",
                      required: true,
                    },
                    answer: null,
                  },
                  {
                    question: {
                      question_key: "gifts-payroll",
                      category: "Credits and Deductions",
                      question: "Cash Type",
                      type: "Single Choice",
                      sub_text:
                        "<b>Type of Cash Payment<br><br>Payroll<br></b>Payroll Giving is a way of giving money to charity without paying tax on it. It must be paid through PAYE from wages or pension.<br>Your employer needs to set up and run the scheme. The amount of tax relief you get depends on the rate of tax you pay.<br><br><b>One-off<br></b>If you had given money to charity on a certain date or time without signing up to make future payments, this would be considered a one-off transaction.<br><br><b>Direct Debit<br></b>If you have signed up to monthly charity payments through direct debit. Please provide the total amount that you had provided across the tax year.",
                      help_text:
                        "<h3> \nType of cash payment \n</h3> \n<p> \n<h4>Payroll</h4> \n<p>Payroll Giving is a way of giving money to charity without paying tax on it. It must be paid through PAYE from wages or pension.</p> \n<p>Your employer needs to set up and run the scheme. The amount of tax relief you get depends on the rate of tax you pay.</p> \n<h4>One-off</h4> \n<p>If you had given money to charity on a certain date or time without signing up to make future payments, this would be considered a one-off transaction.</p> \n<h4>Direct Debit</h4> \n<p>If you have signed up to monthly charity payments through Direct Debit, enter the total amount that you have donated across the tax year.</p> \n</p>",
                      choices: [
                        {
                          key: "__payroll",
                          name: "Payroll",
                        },
                        {
                          key: "__one_off",
                          name: "One-off",
                        },
                        {
                          key: "__direct_debit",
                          name: "Direct Debit/Frequent",
                        },
                      ],
                      parent_question: "gifts-add",
                      row_data_label: "Payment type",
                      display_rulesets: [
                        {
                          rules: [
                            {
                              question_key: "gifts-type",
                              operator: "is",
                              value: "__cash_gift_aid",
                            },
                          ],
                          type: "and",
                        },
                      ],
                      required: true,
                    },
                    answer: null,
                  },
                  {
                    question: {
                      question_key: "gifts-amount",
                      category: "Credits and Deductions",
                      question: "Value (Annual)",
                      type: "Numeric",
                      unit: "£",
                      sub_text:
                        "If this is cash, enter the cash amount. If others, enter the value of the investment when you gifted it.",
                      parent_question: "gifts-add",
                      row_data_label: "Annual value",
                      required: true,
                      help_text: null,
                    },
                    answer: null,
                  },
                ],
              },
              answer: [],
            },
          ],
          status: "Incomplete",
          categoryExtras: {
            name: "Credits and Deductions",
            start: "credit-intro",
          },
          intro:
            "<p>\n                At Taxd, our goal is to help you save on your tax bill throughout the entire process. We do this by showing you different deductions available to you, so you can make the most out of your income.\n            </p>\n            <br />\n            <p>\n                In this section, we have compiled a list of various credits and deductions that don't directly relate to a specific source of income. These can help you to reduce your bill, and even if you don't use them this year, they're worth keeping in mind for the future. So, let's take a look and see how we can maximize your tax savings! You may need details around:\n            </p>\n            <br />\n            <h3>If applicable, you may need details around:</h3>\n            <br />\n            <br />\n            <ul>\n                <li>Pension contributions</li>\n                <li>Charitable contributions</li>\n                <li>Marriage or blind allowance details</li>\n                <li>Venture capital schemes</li>\n            </ul>\n            <br />\n            <p>Shall we get started?</p>",
          progressBarLength: 10,
          progressBarIndex: 2,
        },
        Investment: {
          questionFlow: [
            {
              question: {
                question_key: "interest-foreign",
                category: "Investment",
                question: "Did any of your interests come from overseas?",
                type: "Boolean",
                if_true: "interest-addbrokerage_foreign",
                if_false: "interest-addbrokerage",
                display_rulesets: [
                  {
                    if_display_false: "interest-addbrokerage",
                    rules: [
                      {
                        question_key: "Introduction.intro-taxyearoptions",
                        operator: "contains",
                        value: "__income_overseas",
                      },
                      {
                        question_key: "Introduction.intro-income",
                        operator: "contains",
                        value: "__interest",
                      },
                      {
                        question_key: "non-resident",
                        operator: "is not",
                        value: true,
                      },
                    ],
                    type: "and",
                  },
                ],
                required: true,
                sub_text: null,
                help_text: null,
              },
              answer: null,
            },
          ],
          status: "Not Started",
          categoryExtras: {
            name: "Investment",
            start: "interest-foreign",
          },
          intro:
            "<p>\n                Let's take a look at dividends and interest, both being taxable sources of income in the UK. Unless\n                wrapped in an ISA, or if under the allowance.\n            </p>\n            <br />\n            <h3>How can I maximise my tax efficiency here?</h3>\n            <br />\n            <br />\n            <ul>\n                <li>Make use of your interest and dividend allowance.</li>\n                <li>Leverage tax-efficient ISAs - there is no tax to pay on interest or dividends within an ISA.</li>\n            </ul>\n            <br />\n            <h3>Make sure to have these handy...</h3>\n            <br />\n            <br />\n            <ul>\n                <li>Investment statements</li>\n                <li>Saving statements</li>\n                <li>Your bank or brokerage will have the required statements.</li>\n            </ul>",
          progressBarLength: 7,
          progressBarIndex: 0,
        },
        Rental: {
          questionFlow: [
            {
              question: {
                question_key: "rental-addproperty",
                category: "Rental",
                question: "Click 'Add New' to add a property",
                type: "Array",
                sub_text:
                  "Once you've added all your properties, click next to complete the section.",
                help_text:
                  "<h3>Property income</h3>\n<h4>Rent-a-Room</h4>\n<p>Everyone in the UK can rent out part of their own home and get tax relief known as Rent-a-Room relief. This relief allows an individual to earn up to <strong>£7,500</strong> per year tax free from any lodgers that may be renting a room in their home. Any income over this amount will be subject to tax at the normal income tax rates.</p>\n<p>If you are a joint owner of the home, this <strong>£7,500</strong> is reduced to your earning %. For example, if you and your partner own the home equally, the total is is reduced to <strong>£3,750</strong> per individual tax return.</p>\n<p>If your earnings are over £7,500 then you have 2 options:</p>\n<ul>\n<li>Option 1: You pay income tax on the amount it goes over the £7,500.</li>\n<li>Option 2: If you have expenses of over £7,500, you can elect to not use Rent-a-Room relief and calculate your taxable amount by the calculation: <em>income - expenses = taxable profit</em>.</li>\n</ul>\n<h4>UK rental property</h4>\n<p>This is the most common type of landlord and relates to normal residential dwellings.</p>\n<p>You'll have to pay <strong>Class 2 National Insurance</strong> if your profits are <strong>£6,515</strong> a year or more and if what you do counts as running a business, for example if all the following apply:</p>\n<ul>\n<li>Being a landlord is your main job</li>\n<li>You rent out more than one property</li>\n<li>You are buying new properties to rent out</li>\n</ul>\n<p>The first <strong>£1,000</strong> of your income from property rental is tax-free. This is your property allowance.</p>\n<p>You must report it on a Self Assessment tax return if it is:</p>\n<ul>\n<li><strong>£2,500</strong> to <strong>£9,999</strong> after allowable expenses</li>\n<li><strong>£10,000</strong> or more before allowable expenses</li>\n</ul>\n<p>You or your company must pay tax on the profit you make from renting out the property after the deductions. Allowable expenses are things you need to spend money on in the day-to-day running of the property. These can include:</p>\n<ul>\n<li>Letting agent fees</li>\n<li>Legal fees for lets of a year or less, or for renewing a lease for less than 50 years</li>\n<li>Accountant fees</li>\n<li>Buildings and contents insurance</li>\n<li>Maintenance and repairs to the property, (but not improvements)</li>\n<li>Utility bills like gas, water and electricity</li>\n<li>Rent, ground rent, service charges</li>\n<li>Council Tax</li>\n<li>Services you pay for, like cleaning or gardening</li>\n<li>Other direct costs of letting the property, like phone calls, stationery and advertising</li>\n</ul>\n<p>We'll run through these in later questions and help you determine your net profit/loss to be reported on the tax return.</p>\n<h4>Furnished Holiday Letting</h4>\n<p>There are special tax rules for rental income from properties that qualify as furnished holiday lettings (FHLs).</p>\n<p>To qualify as a FHL your property must:</p>\n<ul>\n<li>Be in the UK or in the European Economic Area (EEA). The EEA includes Iceland, Liechtenstein and Norway</li>\n<li>Be furnished. There must be sufficient furniture provided for normal occupation and your visitors must be entitled to use this furniture</li>\n<li>Satisfy the occupation conditions. For example, available for let or short-term lets to the public.</li>\n</ul>\n<p>The property must be commercially let, meaning that you must intend to make a profit. If you let the property out of season to cover costs but didn't make a profit, the letting will still be treated as commercial.</p>\n<p>All your FHLs in the UK are taxed as a single UK FHL business and all FHLs in other EEA states are taxed as a single EEA FHL business. You will need to keep separate records for each FHL business because the losses from one FHL business can't be used against profits of the other.</p>\n<p>Due to COVID-19, there are certain reliefs and claims that can be made to qualify for FHL even if the occupancy conditions were not met.</p>\n<p>Get in touch through the <em>Support Chat</em> if you have any questions.</p>",
                submit: "foreign-property_multi",
                child_category: "Rental Property",
                required: true,
              },
              answer: [],
            },
          ],
          status: "Not Started",
          categoryExtras: {
            name: "Rental",
            start: "rental-addproperty",
          },
          intro:
            "<p>Taxd has you covered whether you are renting out:</p>\n            <br />\n            <ul>\n                <li>a room in your own home</li>\n                <li>residential properties</li>\n                <li>furnished holiday lets (FHLs)</li>\n            </ul>\n            <br />\n            <h3>What will we ask you?</h3>\n            <br />\n            <br />\n            <ul>\n                <li>Earnings and expenses related to your property.</li>\n                <li>Check out all the expenses, as you may be able to expense more than you think.</li>\n            </ul>\n            <br />\n            <p>As always, get in touch through the chat if you have any questions.</p>",
          progressBarLength: 6,
          progressBarIndex: 0,
        },
        Trusts: {
          questionFlow: [
            {
              question: {
                question_key: "trusts-discretionary_income_multi",
                category: "Trusts",
                question: "Did you receive any discretionary income?",
                type: "Boolean Multi",
                submit: "trusts-non_discretionary_income_multi",
                sub_questions: [
                  {
                    boolean_key: "trusts-discretionary_income",
                    show_on: true,
                    questions: ["trusts-discretionary_net", "trusts-discretionary_settlor"],
                  },
                ],
                required: true,
                sub_text: null,
                help_text: null,
                questionObjects: [
                  {
                    booleanQuestion: {
                      question: {
                        question_key: "trusts-discretionary_income",
                        category: "Trusts",
                        type: "Boolean",
                        parent_question: "trusts-discretionary_income_multi",
                        question: null,
                        sub_text: null,
                        help_text: null,
                      },
                      answer: true,
                    },
                    showOn: true,
                    questionObjects: [
                      {
                        question: {
                          question_key: "trusts-discretionary_net",
                          category: "Trusts",
                          question: "Net amount",
                          type: "Numeric",
                          unit: "£",
                          parent_question: "trusts-discretionary_income_multi",
                          required: true,
                          sub_text: null,
                          help_text: null,
                        },
                        answer: 23243232,
                      },
                      {
                        question: {
                          question_key: "trusts-discretionary_settlor",
                          category: "Trusts",
                          question: "Total payments from settlor-interested trusts",
                          type: "Numeric",
                          unit: "£",
                          parent_question: "trusts-discretionary_income_multi",
                          sub_text: null,
                          help_text: null,
                        },
                        answer: 34234,
                      },
                    ],
                  },
                ],
              },
              answer: {
                "trusts-discretionary_income": true,
                "trusts-discretionary_net": 23243232,
                "trusts-discretionary_settlor": 34234,
              },
            },
            {
              question: {
                question_key: "trusts-non_discretionary_income_multi",
                category: "Trusts",
                question: "Did you receive any non-discretionary income?",
                type: "Boolean Multi",
                submit: "trusts-settlors_rate_multi",
                sub_questions: [
                  {
                    boolean_key: "trusts-non_discretionary_income",
                    show_on: true,
                    questions: [
                      "trusts-non_discretionary_non_savings",
                      "trusts-non_discretionary_savings",
                      "trusts-non_discretionary_dividend",
                    ],
                  },
                ],
                required: true,
                sub_text: null,
                help_text: null,
                questionObjects: [
                  {
                    booleanQuestion: {
                      question: {
                        question_key: "trusts-non_discretionary_income",
                        category: "Trusts",
                        type: "Boolean",
                        parent_question: "trusts-non_discretionary_income_multi",
                        question: null,
                        sub_text: null,
                        help_text: null,
                      },
                      answer: true,
                    },
                    showOn: true,
                    questionObjects: [
                      {
                        question: {
                          question_key: "trusts-non_discretionary_non_savings",
                          category: "Trusts",
                          question: "Net amount of non-savings income",
                          type: "Numeric",
                          unit: "£",
                          parent_question: "trusts-non_discretionary_income_multi",
                          sub_text: null,
                          help_text: null,
                        },
                        answer: 123123,
                      },
                      {
                        question: {
                          question_key: "trusts-non_discretionary_savings",
                          category: "Trusts",
                          question: "Net amount of savings income",
                          type: "Numeric",
                          unit: "£",
                          parent_question: "trusts-non_discretionary_income_multi",
                          sub_text: null,
                          help_text: null,
                        },
                        answer: 3333,
                      },
                      {
                        question: {
                          question_key: "trusts-non_discretionary_dividend",
                          category: "Trusts",
                          question: "Net amount of dividend income",
                          type: "Numeric",
                          unit: "£",
                          parent_question: "trusts-non_discretionary_income_multi",
                          sub_text: null,
                          help_text: null,
                        },
                        answer: 1212,
                      },
                    ],
                  },
                ],
              },
              answer: {
                "trusts-non_discretionary_income": true,
                "trusts-non_discretionary_non_savings": 123123,
                "trusts-non_discretionary_savings": 3333,
                "trusts-non_discretionary_dividend": 1212,
              },
            },
            {
              question: {
                question_key: "trusts-settlors_rate_multi",
                category: "Trusts",
                question: "Breakdown your trust income",
                type: "Multi Q",
                sub_text:
                  "Use the figures in boxes 7 to 12 on your R185 (Statement of trust income chargeable on settlor) to fill in this section. If you do not have this, ask the trustees for the details. This will not include residential property.",
                submit: "trusts-settlors_gross_multi",
                sub_questions: [
                  "trusts-settlors_rate_non_savings",
                  "trusts-settlors_rate_savings",
                  "trusts-settlors_rate_dividends",
                  "trusts-settlors_rate_non_savings_trust_rate",
                  "trusts-settlors_rate_savings_trust_rate",
                  "trusts-settlors_rate_dividends_trust_rate",
                ],
                help_text: null,
                questionObjects: [
                  {
                    question: {
                      question_key: "trusts-settlors_rate_non_savings",
                      category: "Trusts",
                      question: "Net amount of non-savings income taxed at basic rate",
                      type: "Numeric",
                      unit: "£",
                      parent_question: "trusts-settlors_rate_multi",
                      sub_text: null,
                      help_text: null,
                    },
                    answer: 12,
                  },
                  {
                    question: {
                      question_key: "trusts-settlors_rate_savings",
                      category: "Trusts",
                      question: "Net amount of savings income taxed at basic rate",
                      type: "Numeric",
                      unit: "£",
                      parent_question: "trusts-settlors_rate_multi",
                      sub_text: null,
                      help_text: null,
                    },
                    answer: 22,
                  },
                  {
                    question: {
                      question_key: "trusts-settlors_rate_dividends",
                      category: "Trusts",
                      question: "Net amount of dividend income taxed at dividend rate",
                      type: "Numeric",
                      unit: "£",
                      parent_question: "trusts-settlors_rate_multi",
                      sub_text: null,
                      help_text: null,
                    },
                    answer: 2,
                  },
                  {
                    question: {
                      question_key: "trusts-settlors_rate_non_savings_trust_rate",
                      category: "Trusts",
                      question: "Net amount of non-savings income taxed at trust rate",
                      type: "Numeric",
                      unit: "£",
                      parent_question: "trusts-settlors_rate_multi",
                      sub_text: null,
                      help_text: null,
                    },
                    answer: 2,
                  },
                  {
                    question: {
                      question_key: "trusts-settlors_rate_savings_trust_rate",
                      category: "Trusts",
                      question: "Net amount of savings income taxed at trust rate",
                      type: "Numeric",
                      unit: "£",
                      parent_question: "trusts-settlors_rate_multi",
                      sub_text: null,
                      help_text: null,
                    },
                    answer: 2,
                  },
                  {
                    question: {
                      question_key: "trusts-settlors_rate_dividends_trust_rate",
                      category: "Trusts",
                      question: "Net amount of dividend income taxed at dividend trust rate",
                      type: "Numeric",
                      unit: "£",
                      sub_text:
                        "Use the figures in boxes 13 to 15 on your R185 (Statement of trust income chargeable on settlor) to fill in this section. If you do not have this, ask the trustees for the details. This will not include residential property.",
                      parent_question: "trusts-settlors_rate_multi",
                      help_text: null,
                    },
                    answer: 1222334,
                  },
                ],
              },
              answer: {
                "trusts-settlors_rate_non_savings": 12,
                "trusts-settlors_rate_savings": 22,
                "trusts-settlors_rate_dividends": 2,
                "trusts-settlors_rate_non_savings_trust_rate": 2,
                "trusts-settlors_rate_savings_trust_rate": 2,
                "trusts-settlors_rate_dividends_trust_rate": 1222334,
              },
            },
            {
              question: {
                question_key: "trusts-settlors_gross_multi",
                category: "Trusts",
                question: "What was your gross trust income",
                type: "Multi Q",
                submit: "trusts-deceased",
                sub_questions: [
                  "trusts-settlors_gross_non_savings_gross",
                  "trusts-settlors_gross_savings_gross",
                  "trusts-settlors_gross_additional",
                ],
                required: true,
                sub_text: null,
                help_text: null,
                questionObjects: [
                  {
                    question: {
                      question_key: "trusts-settlors_gross_non_savings_gross",
                      category: "Trusts",
                      question: "Non-savings income paid gross",
                      type: "Numeric",
                      unit: "£",
                      parent_question: "trusts-settlors_gross_multi",
                      sub_text: null,
                      help_text: null,
                    },
                    answer: 4232423,
                  },
                  {
                    question: {
                      question_key: "trusts-settlors_gross_savings_gross",
                      category: "Trusts",
                      question: "Savings income paid gross",
                      type: "Numeric",
                      unit: "£",
                      parent_question: "trusts-settlors_gross_multi",
                      sub_text: null,
                      help_text: null,
                    },
                    answer: 23423423,
                  },
                  {
                    question: {
                      question_key: "trusts-settlors_gross_additional",
                      category: "Trusts",
                      question:
                        "Additional tax paid by the trustees on certain UK life insurance policy gains",
                      type: "Numeric",
                      unit: "£",
                      parent_question: "trusts-settlors_gross_multi",
                      sub_text: null,
                      help_text: null,
                    },
                    answer: 234,
                  },
                ],
              },
              answer: {
                "trusts-settlors_gross_non_savings_gross": 4232423,
                "trusts-settlors_gross_savings_gross": 23423423,
                "trusts-settlors_gross_additional": 234,
              },
            },
            {
              question: {
                question_key: "trusts-deceased",
                category: "Trusts",
                question: "Did you receive any income from the estates of a deceased person?",
                type: "Boolean",
                submit: "trusts-residential_multi",
                if_true: "trusts-deceased_UK_multi",
                required: true,
                sub_text: null,
                help_text: null,
              },
              answer: true,
            },
            {
              question: {
                question_key: "trusts-deceased_UK_multi",
                category: "Trusts",
                question: "Did you receive income from UK estates?",
                type: "Boolean Multi",
                sub_text:
                  "Use the figures in boxes 16 to 24 on your R185 (Estate Income) to fill in this section. This does not include residential property.",
                submit: "trusts-deceased_foreign_estates_multi",
                sub_questions: [
                  {
                    boolean_key: "trusts-deceased_UK",
                    show_on: true,
                    questions: [
                      "trusts-deceased_non_savings",
                      "trusts-deceased_savings",
                      "trusts-deceased_dividends",
                      "trusts-deceased_non_savings_basic_rate",
                      "trusts-deceased_22_percent",
                    ],
                  },
                ],
                required: true,
                help_text: null,
                questionObjects: [
                  {
                    booleanQuestion: {
                      question: {
                        question_key: "trusts-deceased_UK",
                        category: "Trusts",
                        type: "Boolean",
                        parent_question: "trusts-deceased_UK_multi",
                        question: null,
                        sub_text: null,
                        help_text: null,
                      },
                      answer: null,
                    },
                    showOn: true,
                    questionObjects: [
                      {
                        question: {
                          question_key: "trusts-deceased_non_savings",
                          category: "Trusts",
                          question: "Non-savings income",
                          type: "Numeric",
                          unit: "£",
                          parent_question: "trusts-deceased_UK_multi",
                          sub_text: null,
                          help_text: null,
                        },
                        answer: null,
                      },
                      {
                        question: {
                          question_key: "trusts-deceased_savings",
                          category: "Trusts",
                          question: "Savings income",
                          type: "Numeric",
                          unit: "£",
                          parent_question: "trusts-deceased_UK_multi",
                          sub_text: null,
                          help_text: null,
                        },
                        answer: null,
                      },
                      {
                        question: {
                          question_key: "trusts-deceased_dividends",
                          category: "Trusts",
                          question: "Dividend income",
                          type: "Numeric",
                          unit: "£",
                          parent_question: "trusts-deceased_UK_multi",
                          sub_text: null,
                          help_text: null,
                        },
                        answer: null,
                      },
                      {
                        question: {
                          question_key: "trusts-deceased_non_savings_basic_rate",
                          category: "Trusts",
                          question: "Non-savings income taxed at non-repayable basic rate",
                          type: "Numeric",
                          unit: "£",
                          parent_question: "trusts-deceased_UK_multi",
                          sub_text: null,
                          help_text: null,
                        },
                        answer: null,
                      },
                      {
                        question: {
                          question_key: "trusts-deceased_22_percent",
                          category: "Trusts",
                          question: "Income taxed at 22%",
                          type: "Numeric",
                          unit: "£",
                          parent_question: "trusts-deceased_UK_multi",
                          sub_text: null,
                          help_text: null,
                        },
                        answer: null,
                      },
                    ],
                  },
                ],
              },
              answer: {},
            },
          ],
          status: "Incomplete",
          categoryExtras: {
            name: "Trusts",
            start: "trusts-discretionary_income_multi",
          },
          intro:
            "<p>So you had received income from a trust or settlement. We'll guide you through the process of completing the Trust pages of the Self Assessment.</p>\n            <br />\n            <p>\n                Just remember, if you received income from a bare trust, it should be included on the relevant supplementary page that corresponds with the type of income. For example, if it's property income, you should report it on the UK Property page (SA105).\n            </p>\n            <br />\n            <p>\n                To make filling out these pages easier, be sure to refer to the R185 form that your trustee or personal representative gave you.\n            </p>",
          progressBarLength: 9,
          progressBarIndex: 5,
        },
        "Capital Gains": {
          questionFlow: [
            {
              question: {
                question_key: "cgt-rtt",
                category: "Capital Gains",
                question:
                  "Did you complete a real time transaction (RTT) tax return for any of your sales?",
                type: "Boolean",
                sub_text:
                  "<i>Certain asset sales require a RTT to be completed. We will include reference to this in your tax return.</i>",
                if_true: "cgt-rttmultiq",
                if_false: "cgt-sharesintro",
                required: true,
                help_text: null,
              },
              answer: true,
            },
            {
              question: {
                question_key: "cgt-rttmultiq",
                category: "Capital Gains",
                question: "RTT Details",
                type: "Row",
                sub_text:
                  "<i>Please click add new to add a real time transaction. HMRC would have provided you with the relevant reference number to include, or get in touch through the chat for additional support.</i>",
                submit: "cgt-sharesintro",
                sub_questions: ["cgt-rtt_gain_loss", "cgt-rtt_tax", "cgt-rtt_ref", "cgt-rtt_type"],
                row_title_question: "cgt-rtt_ref",
                required: true,
                help_text: null,
                questionObjects: [
                  {
                    question: {
                      question_key: "cgt-rtt_gain_loss",
                      category: "Capital Gains",
                      question: "Gain/Loss",
                      type: "Numeric",
                      unit: "£",
                      sub_text: "Please type a (-) before your answer if it was a loss",
                      parent_question: "cgt-rttmultiq",
                      row_data_label: "Gain/Loss",
                      validation: {
                        min: -10000000000,
                      },
                      required: true,
                      help_text: null,
                    },
                    answer: null,
                  },
                  {
                    question: {
                      question_key: "cgt-rtt_tax",
                      category: "Capital Gains",
                      question: "Tax already paid on disposal",
                      type: "Numeric",
                      unit: "£",
                      parent_question: "cgt-rttmultiq",
                      row_data_label: "Tax paid on disposal",
                      required: true,
                      sub_text: null,
                      help_text: null,
                    },
                    answer: null,
                  },
                  {
                    question: {
                      question_key: "cgt-rtt_ref",
                      category: "Capital Gains",
                      question: "Reference number",
                      type: "Free text",
                      parent_question: "cgt-rttmultiq",
                      validation: {
                        regex: "^[a-zA-Z0-9]*$",
                        title: "Please enter the correct format of your RTT reference",
                      },
                      required: true,
                      sub_text: null,
                      help_text: null,
                    },
                    answer: null,
                  },
                  {
                    question: {
                      question_key: "cgt-rtt_type",
                      category: "Capital Gains",
                      question: "What was the asset type?",
                      type: "List",
                      choices: [
                        {
                          key: "__property",
                          name: "Property Sale",
                        },
                        {
                          key: "__unlisted_shares_assets",
                          name: "Unlisted shares",
                        },
                        {
                          key: "__listed_shares_assets",
                          name: "Listed shares",
                        },
                        {
                          key: "__crypto",
                          name: "Crypto",
                        },
                        {
                          key: "__personal_business",
                          name: "Personal Business Sale",
                        },
                        {
                          key: "__other",
                          name: "Other Asset",
                        },
                      ],
                      parent_question: "cgt-rttmultiq",
                      row_data_label: "Type",
                      required: true,
                      sub_text: null,
                      help_text: null,
                    },
                    answer: null,
                  },
                ],
              },
              answer: [],
            },
          ],
          status: "Incomplete",
          categoryExtras: {
            name: "Capital Gains",
            start: "cgt-rtt",
          },
          intro:
            "<p>\n                Everyone has a £6,000 capital gain allowance - so it's worth making use of it when selling assets. You\n                can also transfer assets to your spouse without creating a taxable event, so both of you can make use of\n                the allowance. Making use of allowable losses are also a great way to reduce your capital gain.\n            </p>\n            <br />\n            <p>\n                There's specific logic for each type of asset, we're building this to pick the most efficient route\n                every time.\n            </p>\n            <br />\n            <h3>Taxd currently supports:</h3>\n            <ul>\n                <li>Crypto capital gains</li>\n                <li>Listed shares and other assets</li>\n                <li>Property (Real Time Transaction)</li>\n            </ul>\n            <p>We are currently building the technology for:</p>\n            <ul>\n                <li>Businesses</li>\n                <li>and more</li>\n            </ul>\n            <p>\n                If this applies to you, get in touch with the Taxd team, who can support manually at no additional cost.\n            </p>",
          progressBarLength: 24,
          progressBarIndex: 1,
        },
        "Pension and Benefits": {
          questionFlow: [
            {
              question: {
                question_key: "benefit-type",
                category: "Pension and Benefits",
                question:
                  "Select all of the taxable state benefits that applied to you during the 2023/2024 tax year.",
                type: "Multiple Choice",
                sub_text: "Consult the <strong>help icon</strong> for more information.",
                help_text:
                  "<h3> \nTax-free and taxable state benefits \n</h3> \n<p> \nTaxable state benefits include: \n<ul> \n<li>Bereavement Allowance (previously known as Widows Pension)</li> \n<li>Carers Allowance</li> \n<li>Contribution-based Employment and Support Allowance (ESA)</li> \n<li>Incapacity Benefit (from the 29th week you get it)</li> \n<li>Jobseekers Allowance (JSA)</li> \n<li>pensions paid by the Industrial Death Benefit scheme</li> \n<li>the State Pension</li> \n<li>Widowed Parents Allowance</li> \n</ul> \n</p> \n<p> \nTax-free state benefits include: \n<ul> \n<li>Attendance Allowance</li> \n<li>Bereavement support payment</li> \n<li>Child Benefit‚ this is income-based so you'll have to pay tax if you earn above the basic rate band</li> \n<li>Child Tax Credit</li> \n<li>Disability Living Allowance (DLA)</li> \n<li>Free TV Licence for over 75s</li> \n<li>Guardians Allowance</li> \n<li>Housing Benefit</li> \n<li>Income Support, you may have to pay tax on Income Support if you were involved in a strike</li> \n<li>Income-related Employment and Support Allowance (ESA)</li> \n<li>Industrial Injuries Benefit</li> \n<li>Bereavement Support Payments</li> \n<li>Maternity Allowance</li> \n<li>Pension Credit</li> \n<li>Personal Independence Payment (PIP)</li> \n<li>Severe Disablement Allowance</li> \n<li>Universal Credit</li> \n<li>War Widows Pension</li> \n<li>Winter Fuel Payments and Christmas Bonus</li> \n<li>Working Tax Credit</li> \n</ul> \n</p>",
                choices: [
                  {
                    key: "__bereavement_support",
                    name: "Bereavement Support",
                    submit: "benefit-bereavement_multi",
                  },
                  {
                    key: "__carers_allowance",
                    name: "Carer's Allowance",
                    submit: "benefit-carers_multi",
                  },
                  {
                    key: "__employment_support_allowance",
                    name: "Employment and Support Allowance",
                    submit: "benefit-esa_multi",
                  },
                  {
                    key: "__incapacity_benefit",
                    name: "Incapacity Benefit",
                    submit: "benefit-incapacity_multi",
                  },
                  {
                    key: "__jobseekers_allowance",
                    name: "Jobseeker's Allowance",
                    submit: "benefit-jsa_multi",
                  },
                  {
                    key: "__state_pension",
                    name: "State Pension",
                    submit: "benefit-state_pension_multi",
                  },
                  {
                    key: "__industrial_death_benefit_scheme",
                    name: "Pensions paid by industrial death benefit scheme",
                    submit: "benefit-pensionidbs_multi",
                  },
                  {
                    key: "__child_benefit",
                    name: "Child Benefit",
                    submit: "child-earner_multi",
                  },
                  {
                    key: "__other_state_benefits",
                    name: "Other state benefits",
                    submit: "benefit-other_pension",
                  },
                  {
                    key: "__other_pensions",
                    name: "Other UK pensions and retirement annuities",
                    submit: "benefit-other_retirement_multi",
                  },
                  {
                    key: "__overseas_pensions",
                    name: "Overseas Pensions",
                    submit: "pension-foreign",
                  },
                  {
                    key: "__benefit-type_skip",
                    skip: true,
                    name: "None",
                  },
                ],
                required: true,
              },
              answer: [],
            },
          ],
          status: "Not Started",
          categoryExtras: {
            name: "Pension and Benefits",
            start: "benefit-type",
          },
          intro:
            "<p>As you selected that you had Pension income or State Benefits, we'll ask you about this here.</p>\n            <br />\n            <p>\n                Some of these benefits may be taxable or had tax withheld when you received them. Please note, universal\n                credit is <b>not</b> taxable.\n            </p>\n            <br />\n            <h3>What will we ask you?</h3>\n            <br />\n            <br />\n            <ul>\n                <li>Income relating to your pension, or state benefit.</li>\n                <li>Any taxes deducted from the pension or state benefit.</li>\n                <li>If you had child benefits, how many children you are claiming for.</li>\n            </ul>\n            <br />\n            <p>\n                You may have received a P60 (income statement) or equivalent state benefit summary documents from the UK\n                Government, please keep this to hand as you will need the annual values for the 2023/2024 tax year. As\n                always, get in touch through the chat if you have any questions.\n            </p>",
          progressBarLength: 14,
          progressBarIndex: 0,
        },
        General: {
          questionFlow: [
            {
              question: {
                question_key: "finalising-poa_multi",
                category: "General",
                question: "Did you make any payments on account for this tax year?",
                type: "Boolean Multi",
                sub_text:
                  "Payments on account are advance payments towards your tax bill. If over <strong>80%</strong> of your tax is deducted through employment or you had a liability under £1,000 to pay, you won't have had to make payments on account.",
                help_text:
                  "<h3>Payments on account</h3>\n<p>These are advance payments towards your tax bill, (including Class 4 National Insurance if you're self-employed).</p>\n<p>You have to make 2 payments on account every year unless:</p>\n<ul>\n<li>Your last Self Assessment tax bill was less than £1,000</li>\n<li>You've already paid more than 80% of all the tax you owe, for example through your tax code or because your bank has already deducted interest on your savings</li>\n</ul>\n<p>Each payment is half your previous year's tax bill. Payments are usually due by midnight on 31 January and 31 July.</p>\n<h4>An example</h4>\n<p>Your bill for the 2020-21 tax year is £3,000. You made 2 payments on account last year of £900 each, (£1,800 in total).<br /><br />The total tax to pay by midnight on 31 January 2022 is £2,700. This includes:</p>\n<ul>\n<li>Your balancing payment of £1,200 for the 20/21 tax year, (£3,000 minus £1,800)</li>\n<li>The first payment on account of £1,500, (half your 20/21 tax bill), towards your 21/22 tax bill</li>\n</ul>\n<p>You then make a second payment on account of £1,500 on 31 July 2022.<br /><br />If your tax bill for the 21/22 tax year is more than £3,000 (the total of your 2 payments on account), you'll need to make a balancing payment by 31 January 2023.</p>",
                submit: "other-boolean_multi",
                sub_questions: [
                  {
                    boolean_key: "finalising-poa",
                    show_on: true,
                    questions: ["finalising-poa_jan", "finalising-poa_july"],
                  },
                ],
                required: true,
                questionObjects: [
                  {
                    booleanQuestion: {
                      question: {
                        question_key: "finalising-poa",
                        category: "General",
                        question: "Did you make any payments on account for this tax year?",
                        type: "Boolean",
                        parent_question: "finalising-poa_multi",
                        required: true,
                        sub_text: null,
                        help_text: null,
                      },
                      answer: false,
                    },
                    showOn: true,
                    questionObjects: [
                      {
                        question: {
                          question_key: "finalising-poa_jan",
                          category: "General",
                          question: "First payment (due January)",
                          type: "Numeric",
                          unit: "£",
                          parent_question: "finalising-poa_multi",
                          required: true,
                          sub_text: null,
                          help_text: null,
                        },
                        answer: 23355,
                      },
                      {
                        question: {
                          question_key: "finalising-poa_july",
                          category: "General",
                          question: "Second payment (due July)",
                          type: "Numeric",
                          unit: "£",
                          parent_question: "finalising-poa_multi",
                          required: true,
                          sub_text: null,
                          help_text: null,
                        },
                        answer: 3345,
                      },
                    ],
                  },
                ],
              },
              answer: {
                "finalising-poa": false,
                "finalising-poa_jan": 23355,
                "finalising-poa_july": 3345,
              },
            },
            {
              question: {
                question_key: "other-boolean_multi",
                category: "General",
                question:
                  "During this tax year, have you received a refund or paid tax for previously underpaid tax?",
                type: "Boolean Multi",
                help_text:
                  "<h3>Underpaid tax in previous year - tax code change</h3>\n<p>If you haven't paid the right amount at the end of the tax year, HMRC will send you a Simple Assessment tax calculation. This is also known as a <strong>P800</strong> and it will show you how to get a refund or pay any owed tax.</p>\n<p>You will not get a P800 if you are registered for Self Assessment. Your bill will be adjusted automatically if you have underpaid or overpaid tax.</p>\n<p>You may get a P800 if you:</p>\n<ul>\n<li>Finished one job, started a new one and were paid by both in the same month</li>\n<li>Started receiving a pension at work</li>\n<li>Received Employment and Support Allowance or Jobseekers Allowance</li>\n</ul>\n<p>A P800 is sent out after the tax year ends on 5 April. You will normally get yours by the end of November of the same year.</p>\n<h3>Tax refund (rebate)</h3>\n<p>You will have received a tax refund, (also known as a rebate), if you:</p>\n<ul>\n<li>Stopped working and made an in-year repayment claim from tax paid on your employment or self-employment in the Construction Industry Scheme (CIS)</li>\n<li>Claimed the tax you paid on trivial pension income</li>\n<li>Sent an in-year tax return to claim a refund on tax paid</li>\n<li>Received a repayment from the Jobcentre after 6 April</li>\n</ul>\n<p>If you're amending your tax return, don't include any repayment you received from us after you filed your original return.</p>",
                submit: "student-types_multi",
                sub_questions: [
                  {
                    boolean_key: "other-taxcode",
                    show_on: true,
                    questions: ["other-taxcode_amount"],
                  },
                  {
                    boolean_key: "other-taxcodeprevious",
                    show_on: true,
                    questions: ["other-taxcodeprevious_amount"],
                  },
                  {
                    boolean_key: "other-taxrebate",
                    show_on: true,
                    questions: ["other-taxrebate_amount"],
                  },
                ],
                display_rulesets: [
                  {
                    if_display_false: "student-types_multi",
                    rules: [
                      {
                        question_key: "Flow-helpers.employed-or-director",
                        operator: "is",
                        value: true,
                      },
                    ],
                    type: "or",
                  },
                ],
                required: true,
                sub_text: null,
                questionObjects: [
                  {
                    booleanQuestion: {
                      question: {
                        question_key: "other-taxcode",
                        category: "General",
                        question:
                          "Are you paying a liability from 2023/2024 tax year in your current tax code?",
                        type: "Boolean",
                        sub_text:
                          "You may have received a Simple Assessment tax calculation, (P800), notice to claim underpaid tax from the 2023/2024 tax year.",
                        help_text:
                          "<h3> \nUnderpaid tax in previous year - Tax code change \n</h3> \n<p> \nIf you have not paid the right amount at the end of the tax year, HMRC will send you a Simple Assessment tax calculation. This is also known as a P800. Your P800 will tell you how to get a refund or how to pay tax you owe.</p> \n<p>You will not get a P800 if you are registered for Self Assessment. Your bill will be adjusted automatically if you have underpaid or overpaid tax.</p> \n<p>You may get a P800 if you: \n<ul> \n<li>Finished one job, started a new one and were paid by both in the same month;</li> \n<li>Started receiving a pension at work; or</li> \n<li>Received Employment and Support Allowance or Jobseekers Allowance.</li> \n</ul> \n</p> \n<p> \nA P800 is sent out after the tax year ends on 5 April. You will normally get yours by the end of November of the same year. \n</p>",
                        parent_question: "other-boolean_multi",
                        required: true,
                      },
                      answer: null,
                    },
                    showOn: true,
                    questionObjects: [
                      {
                        question: {
                          question_key: "other-taxcode_amount",
                          category: "General",
                          question:
                            "How much of the 2023/2024 underpaid tax is being claimed through your tax code?",
                          type: "Numeric",
                          unit: "£",
                          sub_text:
                            "This amount should either be on your P800 notice or on your Government Gateway account.",
                          help_text:
                            "<h3> \nUnderpaid tax in previous year - Tax code change \n</h3> \n<p> \nIf you have not paid the right amount at the end of the tax year, HMRC will send you a Simple Assessment tax calculation. This is also known as a P800. Your P800 will tell you how to get a refund or how to pay tax you owe.</p> \n<p>You will not get a P800 if you are registered for Self Assessment. Your bill will be adjusted automatically if you have underpaid or overpaid tax.</p> \n<p>You may get a P800 if you: \n<ul> \n<li>Finished one job, started a new one and were paid by both in the same month;</li> \n<li>Started receiving a pension at work; or</li> \n<li>Received Employment and Support Allowance or Jobseekers Allowance.</li> \n</ul> \n</p> \n<p> \nA P800 is sent out after the tax year ends on 5 April. You will normally get yours by the end of November of the same year. \n</p>",
                          parent_question: "other-boolean_multi",
                          validation: {
                            min: 0.01,
                          },
                          required: true,
                        },
                        answer: null,
                      },
                    ],
                  },
                  {
                    booleanQuestion: {
                      question: {
                        question_key: "other-taxcodeprevious",
                        category: "General",
                        question:
                          "Did you pay off any liability from previous years in the 2023/2024 tax year?",
                        type: "Boolean",
                        sub_text:
                          "You may have received a Simple Assessment tax calculation (P800) notice to claim underpaid tax or outstanding debt from years prior to the 2023/2024 tax year.",
                        parent_question: "other-boolean_multi",
                        required: true,
                        help_text: null,
                      },
                      answer: null,
                    },
                    showOn: true,
                    questionObjects: [
                      {
                        question: {
                          question_key: "other-taxcodeprevious_amount",
                          category: "General",
                          question: "How much did you repay?",
                          type: "Numeric",
                          unit: "£",
                          parent_question: "other-boolean_multi",
                          required: true,
                          sub_text: null,
                          help_text: null,
                        },
                        answer: null,
                      },
                    ],
                  },
                  {
                    booleanQuestion: {
                      question: {
                        question_key: "other-taxrebate",
                        category: "General",
                        question:
                          "Did you receive any rebates or tax refunds from HMRC for the 2023/2024 tax year?",
                        type: "Boolean",
                        help_text:
                          "<h3> \nTax Refund (Rebate) \n</h3> \n<p> \nIf you have received a tax refund (also known as a rebate) because you: \n<ul> \n<li>Stopped working and made an in-year repayment claim from tax paid on your employment or self-employment in the Construction Industry Scheme (CIS);</li> \n<li>Claimed the tax you paid on trivial pension income;</li> \n<li>Sent an in-year tax return to claim a refund on tax paid; or</li> \n<li>Received a repayment from the Job Centre after 6 April; then</li> \n</ul> \nput the amount refunded here. \n</p> \n<p> \nIf you are amending your tax return, do not include any repayment you received from us after you filed your original return. \n</p>",
                        parent_question: "other-boolean_multi",
                        required: true,
                        sub_text: null,
                      },
                      answer: null,
                    },
                    showOn: true,
                    questionObjects: [
                      {
                        question: {
                          question_key: "other-taxrebate_amount",
                          category: "General",
                          question: "What amount was paid back to you?",
                          type: "Numeric",
                          unit: "£",
                          help_text:
                            "<h3> \nTax Refund (Rebate) \n</h3> \n<p> \nIf you have received a tax refund (also known as a rebate) because you: \n<ul> \n<li>Stopped working and made an in-year repayment claim from tax paid on your employment or self-employment in the Construction Industry Scheme (CIS);</li> \n<li>Claimed the tax you paid on trivial pension income;</li> \n<li>Sent an in-year tax return to claim a refund on tax paid; or</li> \n<li>Received a repayment from the Job Centre after 6 April; then</li> \n</ul> \nput the amount refunded here. \n</p> \n<p> \nIf you are amending your tax return, do not include any repayment you received from us after you filed your original return. \n</p>",
                          parent_question: "other-boolean_multi",
                          required: true,
                          sub_text: null,
                        },
                        answer: null,
                      },
                    ],
                  },
                ],
              },
              answer: {},
            },
          ],
          status: "Incomplete",
          categoryExtras: {
            name: "General",
            start: "finalising-poa_multi",
          },
          intro:
            "<p>We're nearly there - there's just a couple questions we need to ask, for completeness.</p>\n            <br />\n            <p>\n                Some of these cases are rare, so if you have any questions or need support - get in touch with the Taxd\n                team by clicking the 'Help' icon to the bottom right of the screen.\n            </p>\n            <br />\n            <p>Estimated time to complete: 2-5 minutes.</p>",
          progressBarLength: 19,
          progressBarIndex: 1,
        },
        "Personal Info": {
          questionFlow: [
            {
              question: {
                question_key: "personal_info-name_dob",
                category: "Personal Info",
                question: "Your name and date of birth",
                type: "Multi Q",
                sub_text:
                  "Make sure you type your name and date of birth as it's shown on your passport or driver's license. Make sure to not use any nicknames or shortened names.",
                help_text:
                  "<h3> \n Why are we asking this? \n </h3> \n <p> \nBy law, HMRC requires these details to confirm your identity. \n </p>",
                submit: "personal_info-country",
                sub_questions: [
                  "personal_info-first_name",
                  "personal_info-last_name",
                  "personal_info-date_of_birth",
                ],
                required: true,
                questionObjects: [
                  {
                    question: {
                      question_key: "personal_info-first_name",
                      category: "Personal Info",
                      question: "First name",
                      type: "Free text",
                      parent_question: "personal_info-name_dob",
                      placeholder: "John",
                      validation: {
                        regex: "^[A-Za-z0-9 &'\\(\\)*,-\\.@£]{1,56}$",
                        title: "Please enter a real name",
                      },
                      required: true,
                      sub_text: null,
                      help_text: null,
                    },
                    answer: "Jayanta",
                  },
                  {
                    question: {
                      question_key: "personal_info-last_name",
                      category: "Personal Info",
                      question: "Last name",
                      type: "Free text",
                      parent_question: "personal_info-name_dob",
                      placeholder: "Smith",
                      validation: {
                        regex: "^[A-Za-z0-9 &'\\(\\)*,-\\.@£]{1,56}$",
                        title: "Please enter your last name",
                      },
                      required: true,
                      sub_text: null,
                      help_text: null,
                    },
                    answer: "garu",
                  },
                  {
                    question: {
                      question_key: "personal_info-date_of_birth",
                      category: "Personal Info",
                      question: "Date of birth",
                      type: "Date",
                      parent_question: "personal_info-name_dob",
                      validation: {
                        minDate: "1851-01-01",
                        maxDate: "2008-04-05",
                        title: "Please enter a valid date of birth",
                      },
                      required: true,
                      sub_text: null,
                      help_text: null,
                      tax_year: "2023/2024",
                    },
                    answer: null,
                  },
                ],
              },
              answer: {
                "personal_info-first_name": "Jayanta",
                "personal_info-last_name": "garu",
              },
            },
          ],
          status: "Incomplete",
          categoryExtras: {
            name: "Personal Info",
            start: "personal_info-name_dob",
          },
          intro:
            '<div style="margin-bottom: 24px">\n            <p>\n                HMRC requires up-to-date information about you so we\'ll ask you a few questions about yourself -\n                your date of birth, address and contact number.\n            </p>\n            <br />\n            <p>You\'ll also need your:</p>\n            <ul>\n                <li>National Insurance Number (NINO)</li>\n                <li>Unique Taxpayer Reference (UTR)</li>\n            </ul>\n            <br />\n            <p>\n                Any questions about the UTR? Contact Taxd, or check out this\n                <a target="_blank" href="https://taxd.co.uk/blog/whats-a-utr-and-why-do-i-need-one">\n                    article.\n                </a>\n            </p>\n        </div>',
          progressBarLength: 7,
          progressBarIndex: 0,
        },
        "Finalising your return": {
          status: "Blocked",
          intro:
            "<p>You are done! Your tax return for the tax year is ready to file with HMRC.</p>\n        <br />\n        <p>\n            After payment has been confirmed, we will show you all of our calculations and walk you through the tax\n            return. We will also ask you a few final questions around:\n        </p>\n        <br />\n        <ul>\n            <li>Whether you want to make payments on account (if applicable)</li>\n            <li>Whether you want to provide HMRC with any additional information with your tax return.</li>\n            <li>Identity verification for our anti-money laundering purposes.</li>\n        </ul>\n        <br />\n        <h4>Submitting to HMRC</h4>\n        <p>\n            <strong>We only need your UTR for submission.</strong> \n            We will also provide you with a copy of your full tax return to review prior to submission, and a \n            submission receipt for your records.\n        </p>\n        <br />\n        <p>\n            If you have any questions about your tax return, or the Taxd process - get in touch with the Taxd team\n            through the chat on the bottom right of the screen.\n        </p>",
        },
        Employer: {
          categoryExtras: {
            start: "employer-name",
            child_name: "employer-name",
            parent_category: "Employment",
            parent_question: "employer-addnew",
            name: "Employer",
          },
        },
        "Self Employed Business": {
          categoryExtras: {
            start: "self-intro_multi",
            child_name: "self-intro_multi.self-name",
            parent_category: "Self Employed",
            parent_question: "self-addnew",
            name: "Self Employed Business",
          },
        },
        "Partnership Business": {
          categoryExtras: {
            start: "partnership-intro_multi",
            child_name: "partnership-intro_multi.partnership-name",
            parent_category: "Partnership",
            parent_question: "partnership-addnew",
            name: "Partnership Business",
          },
        },
        "Rental Property": {
          categoryExtras: {
            start: "rental-types",
            child_name: "rental-address",
            parent_category: "Rental",
            parent_question: "rental-addproperty",
            name: "Rental Property",
          },
        },
      },
      assessmentType: "full",
      lastSubmittedQuestion: "residence-nonres_tests",
    },
  },
  events: [
    {
      name: "question_submitted",
      params: {
        user_id: "663de0edda060cd0b4195afa",
        question: "residence-nonres_tests",
        category: "Residence",
        success: "true",
      },
    },
  ],
};
