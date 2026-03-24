/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { 
  AlertCircle, 
  TrendingUp, 
  Eye, 
  Search, 
  Filter, 
  ChevronRight, 
  Phone, 
  Users, 
  Globe, 
  Zap,
  ArrowUpRight,
  ShieldAlert,
  Calendar,
  LayoutDashboard,
  Building2,
  MoreHorizontal,
  Clock,
  CheckCircle2,
  Plus,
  BarChart3
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ENTERPRISE_UPDATES } from './constants';
import { EnterpriseUpdate, SignalLevel } from './types';

const LevelBadge = ({ level }: { level: SignalLevel }) => {
  const config = {
    red: { label: '立即跟进', icon: ShieldAlert, className: 'signal-red' },
    yellow: { label: '本月跟进', icon: TrendingUp, className: 'signal-yellow' },
    green: { label: '持续观察', icon: Eye, className: 'signal-green' }
  };
  const { label, icon: Icon, className } = config[level];
  
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold ${className}`}>
      <Icon size={12} />
      {label}
    </span>
  );
};

export default function App() {
  const [filter, setFilter] = useState<SignalLevel | 'all'>('all');
  const [search, setSearch] = useState('');
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const filteredUpdates = useMemo(() => {
    return ENTERPRISE_UPDATES.filter(item => {
      const matchesFilter = filter === 'all' || item.level === filter;
      const matchesSearch = item.companyName.toLowerCase().includes(search.toLowerCase()) || 
                           item.content.toLowerCase().includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [filter, search]);

  const stats = useMemo(() => {
    return {
      red: ENTERPRISE_UPDATES.filter(i => i.level === 'red').length,
      yellow: ENTERPRISE_UPDATES.filter(i => i.level === 'yellow').length,
      green: ENTERPRISE_UPDATES.filter(i => i.level === 'green').length,
    };
  }, []);

  const selectedItem = useMemo(() => 
    ENTERPRISE_UPDATES.find(i => i.id === selectedId), 
  [selectedId]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      {/* Header */}
      <header className="h-16 border-b border-slate-200 bg-white flex items-center justify-between px-6 sticky top-0 z-30">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-100">
            <Building2 size={20} />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight text-slate-900">园区管家工作台</h1>
            <div className="flex items-center gap-2 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              实时监测中 · 2026-03-24
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="搜索企业、动态或关键词..."
              className="pl-10 pr-4 py-2 bg-slate-100 border-transparent focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 rounded-xl text-sm transition-all w-72 outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all">
              <Calendar size={20} />
            </button>
            <div className="h-8 w-[1px] bg-slate-200" />
            <div className="flex items-center gap-3 pl-1">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-bold text-slate-900">陈经理</p>
                <p className="text-[10px] text-slate-400 font-medium">高级园区主管</p>
              </div>
              <div className="w-9 h-9 rounded-xl bg-slate-200 border border-slate-300 overflow-hidden shadow-sm">
                <img src="https://picsum.photos/seed/manager/64/64" alt="avatar" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 flex overflow-hidden">
        {/* Sidebar Navigation */}
        <aside className="w-64 border-r border-slate-200 bg-white p-5 hidden lg:flex flex-col gap-8">
          <section>
            <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">工作台导航</h2>
            <nav className="space-y-1">
              <button 
                onClick={() => setFilter('all')}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition-all ${filter === 'all' ? 'bg-blue-50 text-blue-700 font-bold shadow-sm' : 'text-slate-600 hover:bg-slate-50'}`}
              >
                <div className="flex items-center gap-3">
                  <LayoutDashboard size={18} />
                  全部动态
                </div>
                <span className="text-[10px] font-mono bg-slate-100 px-1.5 py-0.5 rounded text-slate-500">{ENTERPRISE_UPDATES.length}</span>
              </button>
              <button 
                onClick={() => setFilter('red')}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition-all ${filter === 'red' ? 'bg-red-50 text-red-700 font-bold shadow-sm' : 'text-slate-600 hover:bg-slate-50'}`}
              >
                <div className="flex items-center gap-3">
                  <ShieldAlert size={18} />
                  立即跟进
                </div>
                <span className="text-[10px] font-mono bg-red-100 px-1.5 py-0.5 rounded text-red-600">{stats.red}</span>
              </button>
              <button 
                onClick={() => setFilter('yellow')}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition-all ${filter === 'yellow' ? 'bg-yellow-50 text-yellow-700 font-bold shadow-sm' : 'text-slate-600 hover:bg-slate-50'}`}
              >
                <div className="flex items-center gap-3">
                  <TrendingUp size={18} />
                  本月跟进
                </div>
                <span className="text-[10px] font-mono bg-yellow-100 px-1.5 py-0.5 rounded text-yellow-600">{stats.yellow}</span>
              </button>
              <button 
                onClick={() => setFilter('green')}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition-all ${filter === 'green' ? 'bg-green-50 text-green-700 font-bold shadow-sm' : 'text-slate-600 hover:bg-slate-50'}`}
              >
                <div className="flex items-center gap-3">
                  <Eye size={18} />
                  持续观察
                </div>
                <span className="text-[10px] font-mono bg-green-100 px-1.5 py-0.5 rounded text-green-600">{stats.green}</span>
              </button>
            </nav>
          </section>

          <section>
            <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">数据分析</h2>
            <div className="space-y-3">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-slate-400">活跃度</span>
                  <BarChart3 size={14} className="text-blue-500" />
                </div>
                <div className="text-xl font-mono font-bold text-slate-900">84%</div>
                <div className="w-full bg-slate-200 h-1 rounded-full mt-2 overflow-hidden">
                  <div className="bg-blue-500 h-full w-[84%]" />
                </div>
              </div>
            </div>
          </section>

          <div className="mt-auto">
            <div className="p-5 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl text-white shadow-xl shadow-blue-100 relative overflow-hidden group">
              <Zap className="absolute -right-2 -bottom-2 w-20 h-20 text-white/10 group-hover:scale-110 transition-transform" />
              <h3 className="text-sm font-bold mb-2 flex items-center gap-2">
                <CheckCircle2 size={16} />
                整体判断
              </h3>
              <p className="text-xs opacity-90 leading-relaxed font-medium">
                最需警惕<span className="font-black underline decoration-white/30">云海通达</span>，最值得把握<span className="font-black underline decoration-white/30">西湖数智</span>和<span className="font-black underline decoration-white/30">云深处</span>。
              </p>
            </div>
          </div>
        </aside>

        {/* List View */}
        <section className="flex-1 overflow-y-auto p-8 bg-[#F8FAFC]">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-end justify-between mb-8">
              <div>
                <div className="flex items-center gap-2 text-slate-400 mb-1">
                  <Building2 size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Enterprise Dynamics</span>
                </div>
                <h2 className="text-3xl font-black text-slate-900 tracking-tight">企业动态监测</h2>
              </div>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all shadow-sm">
                  <Filter size={16} />
                  筛选
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">
                  <Plus size={16} />
                  新增记录
                </button>
              </div>
            </div>

            <div className="grid gap-4">
              <AnimatePresence mode="popLayout">
                {filteredUpdates.map((item) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    key={item.id}
                    onClick={() => setSelectedId(item.id)}
                    className={`group p-5 rounded-2xl border transition-all cursor-pointer relative overflow-hidden ${selectedId === item.id ? 'bg-white border-blue-500 shadow-xl ring-1 ring-blue-500' : 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-lg'}`}
                  >
                    {selectedId === item.id && (
                      <motion.div 
                        layoutId="active-indicator"
                        className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600" 
                      />
                    )}
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <LevelBadge level={item.level} />
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.category}</span>
                        </div>
                        <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{item.companyName}</h3>
                        <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 font-medium">{item.content}</p>
                      </div>
                      <div className="flex flex-col items-end justify-between self-stretch">
                        <div className="flex -space-x-1.5">
                          {item.tags.slice(0, 2).map(tag => (
                            <span key={tag} className="px-2 py-0.5 bg-slate-50 text-[9px] font-black text-slate-400 rounded-md border border-slate-100 uppercase tracking-tighter">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className={`p-2 rounded-xl transition-all ${selectedId === item.id ? 'bg-blue-600 text-white' : 'bg-slate-50 text-slate-300 group-hover:text-blue-500 group-hover:bg-blue-50'}`}>
                          <ChevronRight className={`transition-transform ${selectedId === item.id ? 'rotate-90' : 'group-hover:translate-x-0.5'}`} size={18} />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              
              {filteredUpdates.length === 0 && (
                <div className="py-20 text-center">
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search size={24} className="text-slate-300" />
                  </div>
                  <h3 className="text-slate-900 font-bold">未找到相关动态</h3>
                  <p className="text-sm text-slate-400">尝试更换搜索词或筛选条件</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Detail Panel */}
        <AnimatePresence>
          {selectedId && selectedItem && (
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="w-[420px] border-l border-slate-200 bg-white shadow-2xl z-40 flex flex-col"
            >
              <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                  <h3 className="font-black text-slate-900 text-sm uppercase tracking-widest">Enterprise Detail</h3>
                </div>
                <button 
                  onClick={() => setSelectedId(null)}
                  className="p-2 hover:bg-slate-200 rounded-xl transition-all text-slate-400 hover:text-slate-600"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-8 space-y-10">
                <header>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400 border border-slate-200">
                      <Building2 size={24} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-black text-slate-900 tracking-tight">{selectedItem.companyName}</h2>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{selectedItem.category}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <LevelBadge level={selectedItem.level} />
                    {selectedItem.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 bg-slate-50 text-[10px] font-bold text-slate-500 rounded-lg border border-slate-100">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </header>

                <div className="space-y-8">
                  <section>
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <AlertCircle size={14} />
                      核心动态 · CORE UPDATE
                    </h4>
                    <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 text-sm leading-relaxed text-slate-700 font-medium">
                      {selectedItem.content}
                    </div>
                  </section>

                  <section>
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <Zap size={14} className="text-amber-500" />
                      深度研判 · ANALYSIS
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed font-medium">
                      {selectedItem.analysis}
                    </p>
                  </section>

                  <section className="p-6 bg-blue-600 rounded-3xl text-white shadow-xl shadow-blue-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-20">
                      <Phone size={48} />
                    </div>
                    <h4 className="text-[10px] font-black text-white/60 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <CheckCircle2 size={14} />
                      行动建议 · ACTION
                    </h4>
                    <p className="text-base font-bold leading-relaxed mb-6 relative z-10">
                      {selectedItem.actionSuggestion}
                    </p>
                    <div className="grid grid-cols-2 gap-3 relative z-10">
                      <button className="py-3 bg-white text-blue-600 rounded-2xl text-xs font-black flex items-center justify-center gap-2 transition-all hover:bg-blue-50 active:scale-95">
                        <Phone size={14} />
                        立即联系
                      </button>
                      <button className="py-3 bg-blue-500 text-white rounded-2xl text-xs font-black flex items-center justify-center gap-2 transition-all hover:bg-blue-400 active:scale-95 border border-white/20">
                        <Calendar size={14} />
                        预约
                      </button>
                    </div>
                  </section>
                </div>

                <div className="pt-8 border-t border-slate-100">
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-5">相关资源 · RESOURCES</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <button className="p-4 border border-slate-200 rounded-2xl hover:bg-slate-50 transition-all flex flex-col items-center gap-3 group">
                      <Globe size={24} className="text-slate-300 group-hover:text-blue-500 transition-colors" />
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">企业官网</span>
                    </button>
                    <button className="p-4 border border-slate-200 rounded-2xl hover:bg-slate-50 transition-all flex flex-col items-center gap-3 group">
                      <Users size={24} className="text-slate-300 group-hover:text-blue-500 transition-colors" />
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">拜访记录</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>
      </main>

      {/* Footer / Status Bar */}
      <footer className="h-10 border-t border-slate-200 bg-white px-6 flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            {stats.red} 风险预警
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-yellow-500" />
            {stats.yellow} 成长机会
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            {stats.green} 观察动态
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={12} />
          最后同步: 2026-03-24 07:28
        </div>
      </footer>
    </div>
  );
}
