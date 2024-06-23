export const surveyData = {
  success: true,
  data: {
    data: {
      dynamicCalculation: {
        taxPosition: 0,
        totalIncome: 0,
        capitalIncome: 0,
        allowableExpenses: 34,
        taxPaid: 0,
        taxLiability: 0,
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
                type: "Multiple Choice",
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
                  },
                  {
                    key: "__resident_other_country",
                    name: "Resident of another country",
                    icon: "americas.svg",
                  },
                  {
                    key: "__trust_income",
                    name: "Trust income",
                    icon: "trust.svg",
                  },
                  {
                    key: "__overseas_pension",
                    name: "Overseas pension scheme",
                    icon: "cloud-rain.svg",
                  },
                  {
                    key: "__intro-taxyearoptions_skip",
                    skip: true,
                    name: "No",
                  },
                ],
                required: true,
              },
              answer: ["__intro-taxyearoptions_skip"],
            },
            {
              question: {
                question_key: "intro-nondom",
                category: "Introduction",
                question: "Did you keep your foreign income overseas?",
                type: "Boolean",
                sub_text:
                  "If you are a UK national then this is likely a 'No'. If you are looking to claim the remittance basis please select 'Yes'",
                help_text:
                  "<h3>Remittance Basis</h3>\n<p>The remittance basis is an alternative tax treatment that’s available to individuals who are resident but not domiciled in the UK and have foreign income and gains. Remittance basis is not available if you are deemed domicile in the UK. You will be deemed domicile if you were born in the UK with UK domicile of origin and UK resident in 2022 to 2023 tax year, or you have been UK resident for at least 15 of the previous 20 tax years and UK resident in 2022 to 2023 tax year.</p>",
                submit: "intro-jobstatus",
                choices: [
                  {
                    key: "__intro-nondom_yes",
                    skip: true,
                    name: "Yes",
                  },

                  {
                    key: "__intro-nondom_No",
                    skip: true,
                    name: "No",
                  },
                ],
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
                required: true,
              },
              answer: ["__intro-nondom_yes"],
            },
            {
              question: {
                question_key: "intro-jobstatus",
                category: "Introduction",
                question: "Your job status in 2023/2024",
                type: "Multiple Choice",
                sub_text: "<p>You can select more than one.</p><br /><strong></strong>",
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
              answer: [
                "__self_employed",
                "__employed",
                "__partnership",
                "__director",
                "__landlord",
              ],
            },
            {
              question: {
                question_key: "intro-income",
                category: "Introduction",
                question: "Additional sources of income",
                type: "Multiple Choice",
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
              answer: [
                "__interest",

                "__dividends",

                "__pensions",

                "__rental_income",

                "__benefits",

                "__crypto_activities",
              ],
            },
            {
              question: {
                question_key: "intro-assets",
                category: "Introduction",
                question: "Have you sold any assets?",
                type: "Multiple Choice",
                sub_text: "Select the asset that you sold below.",
                help_text:
                  '<h3>Capital gains</h3>\n<p><a rel="noopener" href="https://www.taxd.co.uk/post/capital-gains-101" target="_blank">Capital Gains Tax</a> is a tax on the profit when you sell (or dispose of) something (an asset) that\'s increased in value. It\'s the gain you make that\'s taxed, not the total amount of money you receive.</p>\n<p>In the UK, each resident is entitled up to <strong>£12,300</strong> of gains tax free for the year. If your gain was above this, you\'ll need to report this during your Self Assessment.</p>\n<p>If your gain was less than £12,300. feel free to skip this question or select n<strong>o sales</strong>.</p>\n<p>If you made a loss, you still have the option to select the relevant option. Our software remembers this and can offset against gains you might make in the future.</p>\n<p>Disposal of an asset includes:</p>\n<ul>\n<li>Selling it</li>\n<li>Giving it away as a gift or transferring it to someone else</li>\n<li>Swapping it for something else</li>\n<li>Getting compensation for it (like an insurance pay-out if the asset was lost or destroyed)</li>\n</ul>',
                choices: [
                  {
                    key: "__property_land",
                    name: "Property and land",
                    icon: "propertyandland.svg",
                  },
                  {
                    key: "__unlisted_shares",
                    name: "Unlisted Shares",
                    icon: "shares.svg",
                  },
                  {
                    key: "__listed_shares",
                    name: "Listed Shares",
                    icon: "shares.svg",
                  },
                  {
                    key: "__crypto",
                    name: "Cryptocurrency",
                    icon: "cryptocurrency.svg",
                  },
                  {
                    key: "__personalbusiness",
                    name: "Business asset",
                    icon: "contract.svg",
                  },
                  {
                    key: "__other",
                    name: "Other assets",
                    icon: "contract.svg",
                  },
                  {
                    key: "__emi",
                    name: "EMI/BADR",
                    icon: "contract.svg",
                  },
                  {
                    key: "__intro-assets_skip",
                    skip: true,
                    name: "No",
                  },
                ],
                required: true,
              },
              answer: ["__personalbusiness"],
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
                value: "You sold <strong>business asset</strong>.",
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
                    answer: null,
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
                    answer: null,
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
                    answer: null,
                  },
                ],
              },
              answer: {},
            },
          ],
          status: "Not Started",
          categoryExtras: {
            name: "Residence",
            start: "residence-nonres_tests",
          },
          intro:
            "<p>If you live abroad or call another country home, don't worry, we've got you covered in the Residence category. We'll ask you about:</p>\n        <ul>\n            <li>days in the UK</li>\n            <li>workdays in the UK</li>\n            <li>other countries you've lived in</li>\n            <li>your nationalities</li>\n            <li>and your ties to the UK.</li>\n        </ul>\n        <p>A couple of important things to keep in mind:</p>\n        <ol>\n            <li>If you stayed outside the UK all year or are considered a non-resident, you only need to report your UK income.</li>\n            <li>If you're a UK resident but not originally from here, you might be eligible for the 'Remittance Basis.'</li>\n        </ol>\n        <p>Just ask us in the help chat if you're unsure about anything. We're here to assist you!</p>",
          progressBarLength: 32,
          progressBarIndex: 0,
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

              answer: [],
            },
          ],

          status: "Not Started",

          categoryExtras: {
            name: "Employment",

            start: "employer-addnew",
          },

          intro:
            '<div style="margin-bottom: 24px">\n                <p>\n                    You selected that you were employed during the tax year. During this part of the questionnaire\n                    you will give us the necessary details to complete the required Self Assessment fields.\n                </p>\n            </div>\n            <div style="margin-bottom: 24px">\n                <p>\n                    We can automatically pull data from HMRC around your employment earnings, benefits and taxes\n                    paid. Click the Cloud icon at the top right to connect your account.\n                </p>\n                <br />\n                <p style="font-weight: 500">You will need your HMRC Government Gateway ID and Password.</p>\n            </div>\n            <div style="margin-bottom: 24px">\n                <h3>How can I maximise my tax efficiency here?</h3>\n                <br />\n                <br />\n                <p>\n                    If you spent any work days at a different location or office to your main office, then you may\n                    be able to file temporary workplace expenses.\n                </p>\n                <br />\n                <p>\n                    And if you didn\'t receive all the personal allowance you were entitled to, we will ensure this\n                    is allocated to you.\n                </p>\n            </div>\n            <div style="margin-bottom: 24px">\n                <h3>Make sure to have these handy...</h3>\n                <br />\n                <br />\n                <ul>\n                    <li>\n                        <span className="semibold">P60, P45, or P11D documents</span>\n                    </li>\n                    <li>\n                        <span className="semibold">Details of your expenses</span> (For the year)\n                    </li>\n                </ul>\n            </div>',

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
                  id: "6641dcc5eb722d9c7d0336f5",

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

                              answer: "j",
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

                              answer: "fj",
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

                              answer: "AA876AE",
                            },
                          ],
                        },

                        answer: {
                          "self-name": "j",

                          "self-description": "fj",

                          "self-postcode": "AA876AE",
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

                                answer: null,
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

                        answer: {},
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
                    title: "j",

                    subtext:
                      "This self-employment still has some answers left to complete before we can provide you with a complete summary!",

                    data: [],
                  },
                },

                {
                  id: "6641de3cc9dd27d5a9a31eb8",

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

                              answer: "k",
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

                              answer: "k",
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

                              answer: "AA876AW",
                            },
                          ],
                        },

                        answer: {
                          "self-name": "k",

                          "self-description": "k",

                          "self-postcode": "AA876AW",
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

                                answer: false,
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
                          "self-detailchanges": false,
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
                    title: "k",

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
            "<p>So you&apos;re self-employed, you are your own boss!</p>\n            <br />\n            <h3>How can I maximise my tax efficiency here?</h3>\n            <br />\n            <br />\n            <p>\n                We&apos;ll ensure you are tax efficient, by asking you about expenses that are common in your\n                industry.You likely use a car, phone or home for work purposes. We&apos;ll ask you about this and pick\n                the most tax efficient route for you.\n            </p>\n            <br />\n            <h3>Make sure to have these handy...</h3>\n            <br />\n            <br />\n            <ul>\n                <li>Earnings</li>\n                <li>Details of travel (mileage or car costs)</li>\n                <li>Expenses, we&apos;ll ask you about your industry so that we suggest ones specific to your role!</li>\n            </ul>\n            <br />\n\n            <p>If you track your earnings on a spreadsheet or app, keep this to hand.</p>\n            <p>\n                Feel free to get in touch with the Taxd team if you have any questions about what you can, or cannot\n                expense!\n            </p>",

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
                  id: "6641ac56c9dd27d5a9a31324",

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
            "<p>\n                Awesome! It's great to hear that you were a partner in a partnership during the tax year. In this section of the questionnaire, we'll be asking you for the necessary details to complete the required Self Assessment fields.\n            </p>\n            <br />\n            <br />\n            <p>\n                To help us with this, we'll need to gather some information about your partnership business, so be prepared to answer a few questions. It's always a good idea to have a copy of the Partnership Tax Return that includes a summary of your earnings on the Partnership Statement, as this can make things easier for you.\n            </p>\n            <br />\n            <br />\n            <p>\n                And don't worry if you're unsure about anything - we're here to guide you through the process and make sure that your tax return is completed accurately and efficiently.\n            </p>",

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

              answer: ["__pension_payments_ooe"],
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
                  "pension-name": "Umesh",

                  "pension-type": "__registered_pension",

                  "pension-payments": 34,

                  "pension-one_off": 212,

                  _id: "6641a9dfc9dd27d5a9a312df",
                },

                {
                  "pension-name": "Umesh3",

                  "pension-type": "__retirement_annuity",

                  "pension-payments": 34,

                  "pension-one_off": 1,

                  _id: "6641a9dfc9dd27d5a9a312e0",
                },
              ],
            },
          ],

          status: "Complete",

          categoryExtras: {
            name: "Credits and Deductions",

            start: "credit-intro",
          },

          summary: {
            title: "Credits and deductions",

            subtext: "Another category finished!\n    Here's what you told us:",

            data: [
              {
                value:
                  "Private pension payments of £68.00. This extends your basic rate (20% band).",
              },
            ],
          },

          progressBarLength: 10,

          progressBarIndex: 10,
        },

        Investment: {
          questionFlow: [
            {
              question: {
                question_key: "interest-addbrokerage",

                category: "Investment",

                question: "Create an interest entry",

                type: "Row",

                sub_text:
                  "If you had more than one bank/brokerage interest, you can add another. Remember that interest received within an ISA is not taxable.",

                submit: "dividend-foreign",

                sub_questions: [
                  "interest-brokerage",

                  "interest-joint",

                  "interest-jointpercentage",

                  "interest-gross",

                  "interest-taxpaid",
                ],

                row_title_question: "interest-brokerage",

                display_rulesets: [
                  {
                    if_display_false: "dividend-foreign",

                    rules: [
                      {
                        question_key: "Introduction.intro-income",

                        operator: "contains",

                        value: "__interest",
                      },
                    ],

                    type: "and",
                  },
                ],

                required: true,

                help_text: null,

                questionObjects: [
                  {
                    question: {
                      question_key: "interest-brokerage",

                      category: "Investment",

                      question: "Name of the bank or brokerage",

                      type: "Free text",

                      sub_text:
                        "This is likely to be the bank or brokerage you received your interest from.",

                      help_text:
                        "<h3>Savings Account</h3>\n \n <p>A savings account is an interest-bearing deposit account held at a bank or other financial institution. It could also be bonds or gilts. This is likely to be the bank or brokerage you received your interest from.</p>",

                      parent_question: "interest-addbrokerage",

                      row_data_label: "Brokerage",

                      required: true,
                    },

                    answer: null,
                  },

                  {
                    question: {
                      question_key: "interest-joint",

                      category: "Investment",

                      question: "Was this account jointly owned?",

                      type: "Boolean",

                      help_text:
                        "<h3> \n Joint savings account \n </h3> \n <p> \n Having a joint savings account is the same as having one on your own, except two people have control over the account, and can pay in and withdraw funds from the account. \n </p>",

                      parent_question: "interest-addbrokerage",

                      row_data_label: "Joint account",

                      required: true,

                      sub_text: null,
                    },

                    answer: null,
                  },

                  {
                    question: {
                      question_key: "interest-jointpercentage",

                      category: "Investment",

                      question: "Joint ownership percentage",

                      type: "Numeric",

                      unit: "%",

                      parent_question: "interest-addbrokerage",

                      row_data_label: "Ownership",

                      display_rulesets: [
                        {
                          rules: [
                            {
                              question_key: "interest-joint",

                              operator: "is",

                              value: true,
                            },
                          ],

                          type: "and",
                        },
                      ],

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

                  {
                    question: {
                      question_key: "interest-gross",

                      category: "Investment",

                      question: "Gross interest",

                      type: "Numeric",

                      unit: "£",

                      sub_text: "If this was a joint account, please enter the full figure.",

                      parent_question: "interest-addbrokerage",

                      row_data_label: "Gross amount",

                      required: true,

                      help_text: null,
                    },

                    answer: null,
                  },

                  {
                    question: {
                      question_key: "interest-taxpaid",

                      category: "Investment",

                      question: "Has tax been deducted?",

                      type: "Boolean",

                      parent_question: "interest-addbrokerage",

                      row_data_label: "Tax paid",

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
          status: "Not Started",
          categoryExtras: {
            name: "Investment",

            start: "interest-foreign",
          },
          intro:
            "<p>\n                Let's take a look at dividends and interest, both being taxable sources of income in the UK. Unless\n                wrapped in an ISA, or if under the allowance.\n            </p>\n            <br />\n            <h3>How can I maximise my tax efficiency here?</h3>\n            <br />\n            <br />\n            <ul>\n                <li>Make use of your interest and dividend allowance.</li>\n                <li>Leverage tax-efficient ISAs - there is no tax to pay on interest or dividends within an ISA.</li>\n            </ul>\n            <br />\n            <h3>Make sure to have these handy...</h3>\n            <br />\n            <br />\n            <ul>\n                <li>Investment statements</li>\n                <li>Saving statements</li>\n                <li>Your bank or brokerage will have the required statements.</li>\n            </ul>",
          progressBarLength: 7,
          progressBarIndex: 1,
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
            "<p>Taxd has you covered whether you are renting out:</p>\n            <br />\n            <ul>\n                <li>a room in your own home</li>\n                <li>residential properties</li>\n                <li>furnished holiday lets (FHLs)</li>\n            </ul>\n            <br />\n            <h3>What will we ask you?</h3>\n            <br />\n            <br />\n            <ul>\n                <li>Earnings and expenses related to your property.</li>\n                <li>Check out all the expenses, as you may be able to expense more than you think.</li>\n            </ul>\n            <br />\n            <p>As always, get in touch through the chat if you have any questions.</p>",

          progressBarLength: 6,

          progressBarIndex: 0,
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

              answer: null,
            },
          ],

          status: "Not Started",

          categoryExtras: {
            name: "Capital Gains",

            start: "cgt-rtt",
          },

          intro:
            "<p>\n                Everyone has a £6,000 capital gain allowance - so it's worth making use of it when selling assets. You\n                can also transfer assets to your spouse without creating a taxable event, so both of you can make use of\n                the allowance. Making use of allowable losses are also a great way to reduce your capital gain.\n            </p>\n            <br />\n            <p>\n                There's specific logic for each type of asset, we're building this to pick the most efficient route\n                every time.\n            </p>\n            <br />\n            <h3>Taxd currently supports:</h3>\n            <ul>\n                <li>Crypto capital gains</li>\n                <li>Listed shares and other assets</li>\n                <li>Property (Real Time Transaction)</li>\n            </ul>\n            <p>We are currently building the technology for:</p>\n            <ul>\n                <li>Businesses</li>\n                <li>and more</li>\n            </ul>\n            <p>\n                If this applies to you, get in touch with the Taxd team, who can support manually at no additional cost.\n            </p>",

          progressBarLength: 24,

          progressBarIndex: 0,
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
            "<p>As you selected that you had Pension income or State Benefits, we'll ask you about this here.</p>\n            <br />\n            <p>\n                Some of these benefits may be taxable or had tax withheld when you received them. Please note, universal\n                credit is <b>not</b> taxable.\n            </p>\n            <br />\n            <h3>What will we ask you?</h3>\n            <br />\n            <br />\n            <ul>\n                <li>Income relating to your pension, or state benefit.</li>\n                <li>Any taxes deducted from the pension or state benefit.</li>\n                <li>If you had child benefits, how many children you are claiming for.</li>\n            </ul>\n            <br />\n            <p>\n                You may have received a P60 (income statement) or equivalent state benefit summary documents from the UK\n                Government, please keep this to hand as you will need the annual values for the 2023/2024 tax year. As\n                always, get in touch through the chat if you have any questions.\n            </p>",

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

                      answer: null,
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

                        answer: null,
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

                        answer: null,
                      },
                    ],
                  },
                ],
              },

              answer: {},
            },
          ],
          status: "Not Started",
          categoryExtras: {
            name: "General",

            start: "finalising-poa_multi",
          },
          intro:
            "<p>We're nearly there - there's just a couple questions we need to ask, for completeness.</p>\n            <br />\n            <p>\n                Some of these cases are rare, so if you have any questions or need support - get in touch with the Taxd\n                team by clicking the 'Help' icon to the bottom right of the screen.\n            </p>\n            <br />\n            <p>Estimated time to complete: 2-5 minutes.</p>",
          progressBarLength: 19,
          progressBarIndex: 0,
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

                    answer: "maven",
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

                    answer: "",
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
                "personal_info-first_name": "maven",

                "personal_info-last_name": "",
              },
            },
          ],
          status: "Incomplete",
          categoryExtras: {
            name: "Personal Info",

            start: "personal_info-name_dob",
          },
          intro:
            '<div style="margin-bottom: 24px">\n            <p>\n                HMRC requires up-to-date information about you so we\'ll ask you a few questions about yourself -\n                your date of birth, address and contact number.\n            </p>\n            <br />\n            <p>You\'ll also need your:</p>\n            <ul>\n                <li>National Insurance Number (NINO)</li>\n                <li>Unique Taxpayer Reference (UTR)</li>\n            </ul>\n            <br />\n            <p>\n                Any questions about the UTR? Contact Taxd, or check out this\n                <a target="_blank" href="https://taxd.co.uk/blog/whats-a-utr-and-why-do-i-need-one">\n                    article.\n                </a>\n            </p>\n        </div>',
          progressBarLength: 7,
          progressBarIndex: 0,
        },
        "Finalising your return": {
          status: "Blocked",

          intro:
            "<p>You are done! Your tax return for the tax year is ready to file with HMRC.</p>\n        <br />\n        <p>\n            After payment has been confirmed, we will show you all of our calculations and walk you through the tax\n            return. We will also ask you a few final questions around:\n        </p>\n        <br />\n        <ul>\n            <li>Whether you want to make payments on account (if applicable)</li>\n            <li>Whether you want to provide HMRC with any additional information with your tax return.</li>\n            <li>Identity verification for our anti-money laundering purposes.</li>\n        </ul>\n        <br />\n        <h4>Submitting to HMRC</h4>\n        <p>\n            <strong>We only need your UTR for submission.</strong> \n            We will also provide you with a copy of your full tax return to review prior to submission, and a \n            submission receipt for your records.\n        </p>\n        <br />\n        <p>\n            If you have any questions about your tax return, or the Taxd process - get in touch with the Taxd team\n            through the chat on the bottom right of the screen.\n        </p>",
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
      lastSubmittedQuestion: "self-newdetails",
    },
  },
  events: [
    {
      name: "question_submitted",
      params: {
        user_id: "6638a8ee45dbe1f8e91afa8b",
        question: "self-newdetails",
        category: "Self Employed Business",
        success: "true",
      },
    },
  ],
};
