<template>
    <div>
        <table class="styleTable">
            <thead>
                <tr>
                    <th class="styleTh">Status</th>
                    <th class="styleTh">Lista</th>
                    <th class="styleTh">Contatos</th>
                    <th class="styleTh">Enviadas</th>
                    <th class="styleTh">Opções</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="styleTd">aguardando</td>
                    <td class="styleTd">TESTE</td>
                    <td class="styleTd">1</td>
                    <td class="styleTd">0</td>
                    <td class="styleTd">0</td>
                </tr>
                <tr class="styleTbody">
                    <td class="styleTd">aguardando</td>
                    <td class="styleTd">TESTEeeeeeeeeee</td>
                    <td class="styleTd">1</td>
                    <td class="styleTd">0</td>
                    <td class="styleTd">0</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup></script>
<style scoped>
.styleTable {
    @apply table-auto w-full border-collapse
}

.styleTh {
    @apply text-sm px-4 py-2 text-left border-b border-gray-300
}

.styleTd {
    @apply text-xs px-4 py-2 text-left border-b break-words border-gray-300
}
</style>