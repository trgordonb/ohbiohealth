import { RuleEngine, API } from 'node-rules'

export const applyRule = (input: Record<string,unknown>) => {
    return new Promise((resolve) => {
        const R = new RuleEngine();
        const rules = [
            {
                "condition": function(this: any, R: API) {
                    R.when(this.muscleache);
                },
                "consequence": function(this: any, R: API) {
                    this.result = ['mspasm'];
                    R.stop();
                }
            },
            {
                "condition": function(this: any, R: API) {
                    R.when(this.needlesensation && this.spinal)
                },
                "consequence": function(this: any, R: API) {
                    this.result = ['bspurs', 'hdisc'];
                    R.stop();
                }           
            },
            {
                "condition": function(this: any, R: API) {
                    R.when(this.needlesensation && !this.spinal)
                },
                "consequence": function(this: any, R: API) {
                    this.result = ['bspurs', 'arth'];
                    R.stop();
                }           
            },
            {
                "condition": function(this: any, R: API) {
                    R.when(!this.needlesensation && this.burningsensation && this.spinal)
                },
                "consequence": function(this: any, R: API) {
                    this.result = ['arth'];
                    R.stop();
                }           
            },
            {
                "condition": function(this: any, R: API) {
                    R.when(!this.needlesensation && this.burningsensation && !this.spinal)
                },
                "consequence": function(this: any, R: API) {
                    this.result = ['arth','rarth'];
                    R.stop();
                }           
            },
            {
                "condition": function(this: any, R: API) {
                    R.when(!this.needlesensation && !this.burningsensation && this.numbsensation)
                },
                "consequence": function(this: any, R: API) {
                    this.result = ['neuro'];
                    R.stop();
                }           
            },
            {
                "condition": function(this: any, R: API) {
                    R.when(!this.needlesensation && !this.burningsensation && !this.numbsensation)
                },
                "consequence": function(this: any, R: API) {
                    this.result = ['arth'];
                    R.stop();
                }           
            }
        ];
        R.register(rules);
        R.execute(input, function (data) {
            let result = data.result
            resolve(result)
        });
    })
}