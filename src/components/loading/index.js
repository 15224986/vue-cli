import LoadingComponent from './src/main'

let $vmLoading

export default {
    install(Vue, options) {

        if (!$vmLoading) {
            const LoadingPlugin = Vue.extend(LoadingComponent);

            $vmLoading = new LoadingPlugin({
                el: document.createElement('div')
            });

            document.body.appendChild($vmLoading.$el);
        }

        $vmLoading.show = false;

        let mocLoading = {
            show(txt) {
                $vmLoading.show = true;

                if ( txt && txt.trim()) {
                    $vmLoading.text = txt;
                }
            },
            hide() {
                $vmLoading.show = false;
            }
        }

        if (!Vue.$mocLoading) {
            Vue.$mocLoading = mocLoading;
        }

        Vue.mixin({
            created() {
                this.$mocLoading = Vue.$mocLoading;
            }
        });
    }
}
