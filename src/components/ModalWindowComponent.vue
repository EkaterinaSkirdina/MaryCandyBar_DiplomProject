<template>
    <section class="modal_wrapper" ref="modal_wrapper">
        <div class="v-modal">
            <div class="v-modal__header">
            <span class="brand-heading">{{ modalHeading }}</span>
            <span @click="closeModal">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><path style="fill: rgb(180, 194, 203);" d="M255.832,24.016c128.124,0.096,231.912,104.028,231.816,232.152S383.62,488.08,255.496,487.984 C127.444,487.888,23.68,384.052,23.68,256C23.872,127.892,127.724,24.112,255.832,24.016 M255.832,0 C114.443,0.096-0.096,114.779,0,256.168S114.779,512.096,256.168,512C397.485,511.904,512,397.317,512,256 C511.952,114.571,397.261-0.048,255.832,0z" fill="#C7D5DD"></path><g><rect x="227.863" y="113.103" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -106.0971 255.9227)" style="fill: rgb(249, 113, 129);" width="56.028" height="285.857" fill="#E04F5F"></rect><rect x="112.943" y="227.962" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -106.0594 255.9024)" style="fill: rgb(249, 113, 129);" width="285.857" height="56.028" fill="#E04F5F"></rect></g></svg>
            </span>
        </div>
        <div class="v-modal__content">
            <slot></slot>
        </div>
        <div class="v-modal__footer">
            <button class="submit_btn text"
            @click="modalBtnAction"
            >{{ modalBtn }}</button>
        </div>
        </div>

    </section>
</template>

<script>
    export default {
        name: 'ModalWindowComponent',
        props: {
            modalBtn: "OK",
            modalHeading: "Heading"
        },
        methods: {
            closeModal() {
                this.$emit('closeModal');
            },
            modalBtnAction() {
                this.$emit('modalBtnAction');
            }
        },
        mounted() {
            let vm = this;
            document.addEventListener('click', function(item) {
                if (item.target === vm.$refs['modal_wrapper']) {
                    vm.closeModal();
                }
            })
        }
    }
</script>

<style scoped lang="scss">
@import '@/assets/style.scss';

.modal_wrapper {
    position: absolute;
    background: #706f6fc9;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
}
.v-modal {
    padding: 16px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    margin: 0 auto;
    background-color: #fff;
    box-shadow: 2px 2px 10px 3px #f5d3d8;
    border-radius: 30px;
    z-index: 10;

    &__header {
        @include flexAlignment(space-between);
        margin-bottom: 25px;
        & svg {
            width: 35px;
            height: 35px;
            cursor: pointer;
        }
    }
    &__content {
        display: flex;        
        gap: 25px;
    }
    &__footer {
        display: flex;
        justify-content: flex-end;
    }
    .submit_btn {
        display: flex;
        gap: 12px;
        cursor: pointer;
        border: 4px solid $bgColor;
        padding: 15px;
        border-radius: 10px;
        background-color: #fff;
        &:hover {
            background-color: $bgColor;
        }
    }
}

</style>