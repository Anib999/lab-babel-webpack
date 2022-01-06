import { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import loadlogo from './assets/images/logo1.png';
import { AsyncAddCategory, AsyncAddConsumptionGroup, AsyncAddConsumptionLookGroup, AsyncAddItems, AsyncAddItemVsRatio, AsyncAddLocation, AsyncAddRack, AsyncAddType, AsyncAddUnits, AsyncAddWastage, AsyncAppLayout, AsyncCategory, AsyncConsumableReports, AsyncConsumptionIndex, AsyncConsumptionLookIndex, AsyncDashbord, AsyncGoodOut, AsyncGoodsIn, AsyncGoodsInAdd, AsyncGoodsInReports, AsyncGoodsOutAdd, AsyncGoodsOutReports, AsyncInOutConReports, AsyncinvsReports, AsyncItems, AsyncItemVsRatio, AsyncLocation, AsyncLocationStockReport, AsyncMinQuantityReport, AsyncRack, AsyncReports, AsyncSettings, AsyncStocks, AsyncType, AsyncUnits, AsyncWastage, AsyncAddGroupItemVsRatioVsConsumption, AsyncRequestorReport, AsyncTestTypeReport, AsyncReferReport, AsyncCareLab, AsyncRequestorSalesReport, AsyncDailySummary, AsyncDailyTransaction, AsyncLogin, AsyncPublicLayout, AsyncNotFound, AsyncFinance, AsyncTheme, AsyncOutSourcing, AsyncEditBill } from './App/asyncComponent';
import PublicRoute from './Routes/PublicRoute';
import { MenuSettings } from './Data/MenuSettings';
import PrivateRouter from './Routes/PrivateRouter';
import { createGlobalStyle } from 'styled-components'



function App() {
  const theme = JSON.parse(localStorage.getItem('theme'));
  const Potato = createGlobalStyle`
  :root {
  --primary: ${theme?.primary ? theme?.primary: '#e95b29'};
  --secondary: #195eb8; 
  --primaryBackground: #f0f0f0;
  --secondaryBackground: #fefefe;
  --cardColor: #fefefe;
  --titleTxt: #232342;
  }
`
  return (

    <>
      <Potato />
      <Suspense
        fallback={
          <div className='fallback-container'>
            <img src={loadlogo} alt="" />
          </div>
        }
      >
        <Switch>

          <Route exact path="/">
            <Redirect to="/dashbord" />
          </Route>

          <PublicRoute
            exact
            path='/login'
            component={AsyncLogin}
            layout={AsyncPublicLayout}
          />

          {
            MenuSettings.dashboard ? (
              <PrivateRouter
                exact
                path='/dashbord'
                component={AsyncDashbord}
                layout={AsyncAppLayout}
              />
            ) : ''
          }

          {
            MenuSettings.goodsin ? [
              <PrivateRouter
                exact
                key='thisSet/2'
                path='/goodsin'
                component={AsyncGoodsIn}
                layout={AsyncAppLayout}
              />,

              <PrivateRouter
                exact
                key='thisSet/3'
                path='/goodsin/add'
                component={AsyncGoodsInAdd}
                layout={AsyncAppLayout}
              />,

              <PrivateRouter
                exact
                key='thisSet/4'
                path='/goodsin/edit/:id/:from'
                component={AsyncGoodsInAdd}
                layout={AsyncAppLayout}
                forEdit
              />,

            ] : ''
          }

          {
            MenuSettings.item ? [
              <PrivateRouter
                exact
                key='thisSet/5'
                path='/item'
                component={AsyncItems}
                layout={AsyncAppLayout}
              />,

              <PrivateRouter
                exact
                key='thisSet/6'
                path='/item/add'
                component={AsyncAddItems}
                layout={AsyncAppLayout}
              />,

              <PrivateRouter
                exact
                key='thisSet/7'
                path='/item/edit/:id/:typeId/:cateId'
                component={AsyncAddItems}
                layout={AsyncAppLayout}
                forEdit
              />,
            ] : ''
          }

          {
            MenuSettings.goodsout ? [
              <PrivateRouter
                exact
                key='thisSet/8'
                path='/goodsout'
                component={AsyncGoodOut}
                layout={AsyncAppLayout}
              />,

              <PrivateRouter
                exact
                key='thisSet/9'
                path='/goodsout/add'
                component={AsyncGoodsOutAdd}
                layout={AsyncAppLayout}
              />,

              <PrivateRouter
                exact
                key='thisSet/10'
                path='/goodsout/edit/:id/:from'
                component={AsyncGoodsOutAdd}
                layout={AsyncAppLayout}
                forEdit
              />,
            ] : ''
          }

          {
            MenuSettings.type ? [
              <PrivateRouter
                exact
                key='thisSet/11'
                path='/type'
                component={AsyncType}
                layout={AsyncAppLayout}
              />,

              <PrivateRouter
                exact
                key='thisSet/12'
                path='/type/add'
                component={AsyncAddType}
                layout={AsyncAppLayout}
              />,

              <PrivateRouter
                exact
                key='thisSet/13'
                path='/type/edit/:id'
                component={AsyncAddType}
                layout={AsyncAppLayout}
                forEdit
              />,

            ] : ''
          }

          {
            MenuSettings.category ? [
              <PrivateRouter
                exact
                key='thisSet/14'
                path='/category'
                component={AsyncCategory}
                layout={AsyncAppLayout}
              />,

              <PrivateRouter
                exact
                key='thisSet/15'
                path='/category/add'
                component={AsyncAddCategory}
                layout={AsyncAppLayout}
              />,

              <PrivateRouter
                exact
                key='thisSet/16'
                path='/category/edit/:id'
                component={AsyncAddCategory}
                forEdit
                layout={AsyncAppLayout}
              />,

            ] : ''
          }

          {
            MenuSettings.location ? [
              <PrivateRouter
                exact
                key='thisSet/17'
                path='/location'
                component={AsyncLocation}
                layout={AsyncAppLayout}
              />,

              <PrivateRouter
                exact
                key='thisSet/18'
                path='/location/add'
                component={AsyncAddLocation}
                layout={AsyncAppLayout}
              />,

              <PrivateRouter
                exact
                key='thisSet/19'
                path='/location/edit/:id'
                component={AsyncAddLocation}
                layout={AsyncAppLayout}
                forEdit
              />,
            ] : ''
          }

          {
            MenuSettings.rack ? [
              <PrivateRouter
                exact
                key='thisSet/20'
                path='/rack'
                component={AsyncRack}
                layout={AsyncAppLayout}
              />,

              <PrivateRouter
                exact
                key='thisSet/21'
                path='/rack/add'
                component={AsyncAddRack}
                layout={AsyncAppLayout}
              />,

              <PrivateRouter
                exact
                key='thisSet/22'
                path='/rack/edit/:locate/:id'
                component={AsyncAddRack}
                layout={AsyncAppLayout}
                forEdit
              />,
            ] : ''
          }

          {
            MenuSettings.wastage ? [
              <PrivateRouter
                exact
                key='thisSet/23'
                path='/wastage'
                component={AsyncWastage}
                layout={AsyncAppLayout}
              />,

              <PrivateRouter
                exact
                key='thisSet/24'
                path='/wastage/add'
                component={AsyncAddWastage}
                layout={AsyncAppLayout}
              />,

              <PrivateRouter
                exact
                key='thisSet/25'
                path='/wastage/edit/:id/:from'
                component={AsyncAddWastage}
                layout={AsyncAppLayout}
                forEdit
              />,
            ] : ''
          }

          {
            MenuSettings.itemvsratio ? [
              <PrivateRouter
                exact
                key='thisSet/26'
                path='/itemvsratio'
                component={AsyncItemVsRatio}
                layout={AsyncAppLayout}
              />,

              <PrivateRouter
                exact
                key='thisSet/27'
                path='/itemvsratio/add'
                component={AsyncAddItemVsRatio}
                layout={AsyncAppLayout}
              />,

              <PrivateRouter
                exact
                key='thisSet/28'
                path='/itemvsratio/eidt/:id'
                component={AsyncAddItemVsRatio}
                layout={AsyncAppLayout}
                forEdit
              />,

              <PrivateRouter
                exact
                key='thisSet/29'
                path='/itemvsratio/add/group'
                component={AsyncAddGroupItemVsRatioVsConsumption}
                layout={AsyncAppLayout}
                forGroup
              />,

              <PrivateRouter
                exact
                key='thisSet/30'
                path='/itemvsratio/edit/group/:id'
                component={AsyncAddGroupItemVsRatioVsConsumption}
                layout={AsyncAppLayout}
                forEdit
                forGroup
              />,

              <PrivateRouter
                exact
                key='thisSet/31'
                path='/itemvsratio/edit/itemconsumption/:id'
                component={AsyncAddGroupItemVsRatioVsConsumption}
                layout={AsyncAppLayout}
                forEdit
                forCon
              />,

              <PrivateRouter
                exact
                key='thisSet/32'
                path='/itemvsratio/add/itemconsumption'
                component={AsyncAddGroupItemVsRatioVsConsumption}
                layout={AsyncAppLayout}
                forCon
              />,
            ] : ''
          }

          {
            MenuSettings.units ? [
              <PrivateRouter
                exact
                key='thisSet/33'
                path='/units'
                component={AsyncUnits}
                layout={AsyncAppLayout}
              />,

              <PrivateRouter
                exact
                key='thisSet/34'
                path='/units/add'
                component={AsyncAddUnits}
                layout={AsyncAppLayout}
              />,

              <PrivateRouter
                exact
                key='thisSet/35'
                path='/units/edit/:id'
                component={AsyncAddUnits}
                layout={AsyncAppLayout}
                forEdit
              />,
            ] : ''
          }

          {
            MenuSettings.reports ? [
              <PrivateRouter
                exact
                key='thisSet/36'
                path='/reports'
                component={AsyncReports}
                layout={AsyncAppLayout}
              />,

              <PrivateRouter
                exact
                key='thisSet/37'
                path='/reports/goodsin'
                component={AsyncGoodsInReports}
                layout={AsyncAppLayout}
              />,

              <PrivateRouter
                exact
                key='thisSet/38'
                path='/reports/goodsout'
                component={AsyncGoodsOutReports}
                layout={AsyncAppLayout}
              />,

              <PrivateRouter
                exact
                key='thisSet/39'
                path='/reports/consumption'
                component={AsyncConsumableReports}
                layout={AsyncAppLayout}
              />,

              <PrivateRouter
                exact
                key='thisSet/40'
                path='/reports/invs'
                component={AsyncinvsReports}
                layout={AsyncAppLayout}
              />,

              <PrivateRouter
                exact
                key='thisSet/41'
                path='/reports/inoutcon'
                component={AsyncInOutConReports}
                layout={AsyncAppLayout}
              />,

              <PrivateRouter
                exact
                key='thisSet/42'
                path='/reports/stocks'
                component={AsyncStocks}
                layout={AsyncAppLayout}
              />,

              <PrivateRouter
                exact
                key='thisSet/43'
                path='/reports/minquantityreport'
                component={AsyncMinQuantityReport}
                layout={AsyncAppLayout}
              />,

              <PrivateRouter
                exact
                key='thisSet/44'
                path='/reports/locationstockreport'
                component={AsyncLocationStockReport}
                layout={AsyncAppLayout}
              />,

            ] : ''
          }

          {
            MenuSettings.consumption ? [
              <PrivateRouter
                exact
                key='thisSet/45'
                path='/consumption'
                component={AsyncConsumptionIndex}
                layout={AsyncAppLayout}
              />,

              <PrivateRouter
                exact
                key='thisSet/46'
                path='/consumption/add'
                component={AsyncAddConsumptionGroup}
                layout={AsyncAppLayout}
              />,

              <PrivateRouter
                exact
                key='thisSet/47'
                path='/consumption/edit/:id'
                component={AsyncAddConsumptionGroup}
                layout={AsyncAppLayout}
                forEdit
              />,
            ] : ''
          }

          {
            MenuSettings.consumptionlook ? [
              <PrivateRouter
                exact
                key='thisSet/48'
                path='/consumptionlook'
                component={AsyncConsumptionLookIndex}
                layout={AsyncAppLayout}
              />,

              <PrivateRouter
                exact
                key='thisSet/49'
                path='/consumptionlook/add'
                component={AsyncAddConsumptionLookGroup}
                layout={AsyncAppLayout}
              />,

              <PrivateRouter
                exact
                key='thisSet/50'
                path='/consumptionlook/edit/:id'
                component={AsyncAddConsumptionLookGroup}
                layout={AsyncAppLayout}
                forEdit
              />,
            ] : ''
          }
          {
            MenuSettings.finance ? [
              <PrivateRouter
                exact
                path='/finance'
                component={AsyncFinance}
                layout={AsyncAppLayout}
              />
            ] : ''
          }

          {
            MenuSettings.misreports ? [
              <PrivateRouter
                exact
                key='thisSet/51'
                path='/datametric'
                component={AsyncCareLab}
                layout={AsyncAppLayout}
              />,

              <PrivateRouter
                exact
                key='thisSet/52'
                path='/datametric/testtype'
                component={AsyncTestTypeReport}
                layout={AsyncAppLayout}
              />,

              <PrivateRouter
                exact
                key='thisSet/53'
                path='/datametric/requestor'
                component={AsyncRequestorReport}
                layout={AsyncAppLayout}
              />,

              <PrivateRouter
                exact
                key='thisSet/54'
                path='/datametric/referer'
                component={AsyncReferReport}
                layout={AsyncAppLayout}
              />,

              <PrivateRouter
                exact
                key='thisSet/55'
                path='/datametric/requestorsales'
                component={AsyncRequestorSalesReport}
                layout={AsyncAppLayout}
              />,

              <PrivateRouter
                exact
                key='thisSet/56'
                path='/datametric/dailysummary'
                component={AsyncDailySummary}
                layout={AsyncAppLayout}
              />,

              <PrivateRouter
                exact
                key='thisSet/57'
                path='/datametric/dailytransaction'
                component={AsyncDailyTransaction}
                layout={AsyncAppLayout}
              />,
              <PrivateRouter
                exact
                key='theme'
                path='/theme'
                component={AsyncTheme}
                layout={AsyncAppLayout}
              />,
            ] : ''
          }
          {
            MenuSettings.outsourcing ? [
              <PrivateRouter
                exact
                path='/outsourcing'
                component={AsyncOutSourcing}
                layout={AsyncAppLayout}
              />
            ] : ''
          }
          {
            MenuSettings.editbill ? [
              <PrivateRouter
                exact
                path='/editbill'
                component={AsyncEditBill}
                layout={AsyncAppLayout}
              />
            ] : ''
          }
          

          <PrivateRouter
            exact
            path='/settings'
            component={AsyncSettings}
            layout={AsyncAppLayout}
          />
          <Route component={AsyncNotFound} />

        </Switch>
      </Suspense>
    </>
  )
}

export default App;

