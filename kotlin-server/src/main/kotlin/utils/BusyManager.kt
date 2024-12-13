package utils


class BusyManager {

    private var isBusy: Boolean = false


    fun checkIsBusy(): Boolean {
        return this.isBusy
    }

    fun setBusyStatus(isNowBusy: Boolean) {
        this.isBusy = isNowBusy
    }
}